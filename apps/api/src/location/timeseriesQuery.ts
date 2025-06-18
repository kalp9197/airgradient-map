import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class TimeseriesQuery {
  @ApiProperty({ default: '2025-02-01 00:00' })
  @IsString()
  start: string;

  @ApiProperty({ default: '2025-02-07 00:00' })
  @IsString()
  end: string;

  @ApiProperty({ default: '1 D' })
  @IsString()
  bucketSize: string;
}

export default TimeseriesQuery;
