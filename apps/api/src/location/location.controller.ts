import { UsePipes, ValidationPipe, Controller, Get, Param, Query } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import FindOneParams from 'src/utils/findOneParams';
import PaginationQuery from 'src/utils/paginationQuery';
import { LocationService } from './location.service';
import LocationEntity from './location.entity';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ApiPaginatedResponse, Pagination } from 'src/utils/pagination.dto';
import MeasureTypeQuery from 'src/utils/measureTypeQuery';
import TimeseriesQuery from './timeseriesQuery';
import TimeseriesDto from './timeseries.dto';
import LocationMeasuresDto from './locationMeasures.dto';

@ApiTags('Locations')
@Controller('map/api/v1/locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  private readonly logger = new Logger(LocationController.name);

  @Get()
  @ApiPaginatedResponse(
    LocationEntity,
    'Retrieve a paginated list of all locations with their detailed information.',
    '',
  )
  @UsePipes(new ValidationPipe({ transform: true }))
  async getLocations(@Query() { page, pagesize }: PaginationQuery) {
    const locationsEntity = await this.locationService.getLocations(page, pagesize);
    return new Pagination(locationsEntity, page, pagesize);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve detailed information for a specific location by its ID.',
  })
  @ApiOkResponse({ type: LocationEntity })
  @ApiNotFoundResponse({ description: 'Location with the specified ID not found.' })
  @ApiBadRequestResponse({ description: 'Invalid ID format.' })
  @UsePipes(new ValidationPipe({ transform: true }))
  async getLocationById(@Param() { id }: FindOneParams) {
    return await this.locationService.getLocationById(id);
  }

  @Get(':id/measures/current')
  @ApiOperation({ summary: 'Retrieve the most recent measurements for a specific location.' })
  @ApiOkResponse({ type: LocationMeasuresDto })
  @ApiNotFoundResponse({
    description: 'Location with the specified ID not found or has no measurements.',
  })
  @ApiBadRequestResponse({ description: 'Invalid ID format.' })
  @UsePipes(new ValidationPipe({ transform: true }))
  async getLastmeasuresByLocationId(@Param() { id }: FindOneParams): Promise<LocationMeasuresDto> {
    const result = await this.locationService.getLocationLastMeasures(id);
    return result;
  }

  @Get(':id/measures/history')
  @ApiPaginatedResponse(
    TimeseriesDto,
    'Retrieve historical measurements for a specific location.',
    'The time range is specified with `start` and `end` query parameters in "YYYY-MM-DD HH:mm" or "YYYY-MM-DD" format. The `bucketSize` determines the aggregation interval and follows the ISO 8601 duration format (e.g., "15m", "1h", "1d"). The `measure` parameter specifies the type of data to retrieve.',
  )
  @ApiBadRequestResponse({ description: 'Invalid query parameters.' })
  @UsePipes(new ValidationPipe({ transform: true }))
  async getmeasuresHistoryByLocationIdl(
    @Param() { id }: FindOneParams,
    @Query() { measure }: MeasureTypeQuery,
    @Query() timeseries: TimeseriesQuery,
  ): Promise<Pagination<TimeseriesDto>> {
    const history = await this.locationService.getLocationMeasuresHistory(
      id,
      timeseries.start,
      timeseries.end,
      timeseries.bucketSize,
      measure,
    );
    const timeseriesDto = history.map((timeseries: TimeseriesDto) => new TimeseriesDto(timeseries));

    return new Pagination(timeseriesDto, null, null);
  }
}
