import { UsePipes, ValidationPipe, Controller, Get, Query } from '@nestjs/common';
import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { Pagination, ApiPaginatedResponse } from 'src/utils/pagination.dto';
import AreaQuery from './areaQuery';
import MeasureTypeQuery from '../utils/measureTypeQuery';
import MeasurementEntity from './measurement.entity';
import MeasurementClusterModel from './measurementCluster.model';
import PaginationQuery from 'src/utils/paginationQuery';
import { ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Measurements')
@Controller('map/api/v1/measurements')
@UseInterceptors(ClassSerializerInterceptor)
export class MeasurementController {
  constructor(private readonly measurementService: MeasurementService) {}

  private readonly logger = new Logger(MeasurementController.name);

  @Get('/current')
  @ApiPaginatedResponse(
    MeasurementEntity,
    'Retrieves the most recent measurements from all locations.',
    'Use the `measure` query parameter to specify and return only the desired measurement type. If not provided, all measures are returned.',
  )
  @ApiBadRequestResponse({ description: 'Invalid query parameters.' })
  @UsePipes(new ValidationPipe({ transform: true }))
  async getLastMeasurements(
    @Query() { measure }: MeasureTypeQuery,
    @Query() { page, pagesize }: PaginationQuery,
  ) {
    const measurementEntity = await this.measurementService.getLastMeasurements(
      measure,
      page,
      pagesize,
    );
    return new Pagination(measurementEntity, page, pagesize);
  }

  @Get('/current/area')
  @ApiPaginatedResponse(
    MeasurementEntity,
    'Retrieve the most recent measurements from all locations within a specific geographic area.',
    'The area is defined by a bounding box using `xmin`, `ymin` (bottom-left) and `xmax`, `ymax` (top-right) coordinates. Use the `measure` query parameter to specify a measurement type.',
  )
  @ApiBadRequestResponse({ description: 'Invalid query parameters.' })
  @UsePipes(new ValidationPipe({ transform: true }))
  async getLastMeasurementsByArea(
    @Query() { measure }: MeasureTypeQuery,
    @Query() area: AreaQuery,
    @Query() { page, pagesize }: PaginationQuery,
  ) {
    const measurementEntity = await this.measurementService.getLastMeasurementsByArea(
      area.xmin,
      area.ymin,
      area.xmax,
      area.ymax,
      measure,
    );
    return new Pagination(measurementEntity, null, null);
  }

  @Get('/current/cluster')
  @ApiPaginatedResponse(
    MeasurementClusterModel,
    'Retrieve the current measurements from clustered locations within a specific area.',
    "The area is defined by a bounding box using `xmin`, `ymin` (bottom-left) and `xmax`, `ymax` (top-right) coordinates, along with a `zoom` level. The `measure` query parameter defines the value to be clustered, defaulting to 'pm25'.",
  )
  @ApiBadRequestResponse({ description: 'Invalid query parameters.' })
  @UsePipes(new ValidationPipe({ transform: true }))
  async getLastMeasurementsByCluster(
    @Query() { measure }: MeasureTypeQuery,
    @Query() area: AreaQuery,
    @Query() { page, pagesize }: PaginationQuery,
  ) {
    const measurementClusterModel = await this.measurementService.getLastMeasurementsByCluster(
      area.xmin,
      area.ymin,
      area.xmax,
      area.ymax,
      area.zoom,
      measure,
    );
    return new Pagination(measurementClusterModel, null, null);
  }
}
