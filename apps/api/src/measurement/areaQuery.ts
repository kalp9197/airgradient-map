import { IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class AreaQuery {
  @ApiProperty({ description: 'West longitude of the area (min longitude).' })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  xmin: number;

  @ApiProperty({ description: 'South latitude of the area (min latitude).' })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  ymin: number;

  @ApiProperty({ description: 'East longitude of the area (max longitude).' })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  xmax: number;

  @ApiProperty({ description: 'North latitude of the area (max latitude).' })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  ymax: number;

  @ApiProperty({ description: 'Map zoom level.', required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  zoom?: number;
}

export default AreaQuery;
