import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class Measurement {
  @ApiProperty({ description: 'The unique identifier for the location.' })
  locationId: number;

  @ApiProperty({ description: 'The name of the location.' })
  locationName: string;

  @ApiProperty({ description: 'The longitude of the location.' })
  longitude: number;

  @ApiProperty({ description: 'The latitude of the location.' })
  latitude: number;

  @ApiProperty({ description: "Type of the sensor, e.g., 'Reference' or 'Small Sensor'." })
  sensorType: string;

  @ApiPropertyOptional({ description: 'Particulate Matter 2.5 (μg/m³). Null if not available.' })
  pm25: number | null;

  @ApiPropertyOptional({ description: 'Particulate Matter 10 (μg/m³). Null if not available.' })
  pm10: number | null;

  @ApiPropertyOptional({ description: 'Atmospheric temperature (°C). Null if not available.' })
  atmp: number | null;

  @ApiPropertyOptional({ description: 'Relative humidity (%). Null if not available.' })
  rhum: number | null;

  @ApiPropertyOptional({ description: 'CO2 concentration (ppm). Null if not available.' })
  rco2: number | null;

  @ApiPropertyOptional({ description: 'Ozone (O₃) concentration (ppb). Null if not available.' })
  o3: number | null;

  @ApiPropertyOptional({
    description: 'Nitrogen Dioxide (NO₂) concentration (ppb). Null if not available.',
  })
  no2: number | null;

  @ApiProperty({ description: 'The timestamp when the measurement was taken.' })
  measuredAt: Date;

  constructor(partial: Partial<Measurement>) {
    Object.assign(this, partial);
  }
}

export default Measurement;
