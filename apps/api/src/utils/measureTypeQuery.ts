import { IsString, IsIn, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export enum MeasureType {
  pm25 = 'pm25',
  pm10 = 'pm10',
  atmp = 'atmp',
  rhum = 'rhum',
  rco2 = 'rco2',
  o3 = 'o3',
  no2 = 'no2',
}

class MeasureTypeQuery {
  @ApiProperty({
    enum: MeasureType,
    required: false,
    description:
      'The type of measurement to query. If not provided, all available measures are returned for some endpoints, or a default is used for others.',
  })
  @IsOptional()
  @IsString()
  @IsIn(Object.values(MeasureType), {
    message: `measure must be one of: ${Object.values(MeasureType).join(', ')}`,
  })
  @Transform(({ value }) => value?.toLowerCase())
  measure?: string;
}

export default MeasureTypeQuery;
