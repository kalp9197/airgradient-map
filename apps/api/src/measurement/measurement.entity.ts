import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class Measurement {
  @ApiProperty()
  locationId: number;

  @ApiProperty()
  locationName: string;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  sensorType: string;

  @ApiPropertyOptional()
  pm25: number | null;

  @ApiPropertyOptional()
  pm10: number | null;

  @ApiPropertyOptional()
  atmp: number | null;

  @ApiPropertyOptional()
  rhum: number | null;

  @ApiPropertyOptional()
  rco2: number | null;

  @ApiPropertyOptional()
  o3: number | null;

  @ApiPropertyOptional()
  no2: number | null;

  @ApiProperty()
  measuredAt: Date;

  constructor(partial: Partial<Measurement>) {
    Object.assign(this, partial);
  }
}

export default Measurement;
