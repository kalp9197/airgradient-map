import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class FindOneParams {
  @ApiProperty({ description: 'A numeric ID of the resource.' })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  id: number;
}

export default FindOneParams;
