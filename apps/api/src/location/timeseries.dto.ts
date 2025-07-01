import { ApiProperty } from '@nestjs/swagger';

class Timeseries {
  @ApiProperty({ description: 'The start of the time bucket for the aggregated data.' })
  timebucket: Date;

  @ApiProperty({
    description: "Aggregated measure's value for the time bucket.",
  })
  value: number;

  constructor(partial: Partial<Timeseries>) {
    Object.assign(this, partial);
  }
}

export default Timeseries;
