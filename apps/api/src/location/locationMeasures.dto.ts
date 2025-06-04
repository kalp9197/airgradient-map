import { ApiProperty } from "@nestjs/swagger";

class LocationMeasures {
  @ApiProperty()
  locationId: number;

  @ApiProperty()
  pm25: number;

  @ApiProperty()
  pm10: number;

  @ApiProperty()
  atmp: number;

  @ApiProperty()
  rhum: number;

  @ApiProperty()
  rco2: number; 

  @ApiProperty()
  o3: number;

  @ApiProperty()
  no2: number;

  @ApiProperty()
  measuredAt: Date

  constructor(partial: Partial<LocationMeasures>) {
    Object.assign(this, partial);
  }
}

export default LocationMeasures;
