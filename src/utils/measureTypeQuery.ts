import { IsString, IsNotEmpty, IsIn, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export enum MeasureType {
  PM25 = 'pm25',
  PM10 = 'pm10',
  ATMP = 'atmp',
  RHUM = 'rhum',
  RCO2 = 'rco2',
  O3 = 'o3',
  NO2 = 'no2',
}

class MeasureTypeQuery {
  @ApiProperty({enum: MeasureType, required: false})
  @IsOptional()
  @IsString()
  @IsIn(
    [MeasureType.PM25, MeasureType.PM10, MeasureType.ATMP, MeasureType.RHUM, MeasureType.RCO2, MeasureType.O3, MeasureType.NO2], 
    { message: 'Invalid measure parameter' }
  )
  @Transform(({ value }) => value?.toLowerCase())
  measure: string;
}

export default MeasureTypeQuery;