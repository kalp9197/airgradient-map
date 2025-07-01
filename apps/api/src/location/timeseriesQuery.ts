import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class TimeseriesQuery {
  @ApiProperty({
    description: 'Start of the time range. Format: "YYYY-MM-DD HH:mm" or "YYYY-MM-DD".',
    default: '2025-02-01 00:00',
  })
  @IsString()
  start: string;

  @ApiProperty({
    description: 'End of the time range. Format: "YYYY-MM-DD HH:mm" or "YYYY-MM-DD".',
    default: '2025-02-07 00:00',
  })
  @IsString()
  end: string;

  @ApiProperty({ description: "Aggregation bucket size, e.g., '15m', '1h', '1d'.", default: '1 D' })
  @IsString()
  bucketSize: string;
}

export default TimeseriesQuery;
