import { ApiProperty } from '@nestjs/swagger';

class LocationMeasures {
  @ApiProperty({ description: 'The unique identifier for the location.' })
  locationId: number;

  @ApiProperty({ description: 'Particulate Matter 2.5 (μg/m³).' })
  pm25: number;

  @ApiProperty({ description: 'Particulate Matter 10 (μg/m³).' })
  pm10: number;

  @ApiProperty({ description: 'Atmospheric temperature (°C).' })
  atmp: number;

  @ApiProperty({ description: 'Relative humidity (%).' })
  rhum: number;

  @ApiProperty({ description: 'CO2 concentration (ppm).' })
  rco2: number;

  @ApiProperty({ description: 'Ozone (O₃) concentration (ppb).' })
  o3: number;

  @ApiProperty({ description: 'Nitrogen Dioxide (NO₂) concentration (ppb).' })
  no2: number;

  @ApiProperty({ description: 'The timestamp when the measurement was taken.' })
  measuredAt: Date;

  constructor(partial: Partial<LocationMeasures>) {
    Object.assign(this, partial);
  }
}

export default LocationMeasures;
