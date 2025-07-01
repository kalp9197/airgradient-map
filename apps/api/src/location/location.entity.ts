import { ApiProperty } from '@nestjs/swagger';

class Location {
  @ApiProperty()
  locationId: number;

  @ApiProperty({ description: 'The name of the location.' })
  locationName: string;

  @ApiProperty({ description: 'The latitude of the location.' })
  latitude: number;

  @ApiProperty({ description: 'The longitude of the location.' })
  longitude: number;

  @ApiProperty({ description: "The ID of the sensor's owner." })
  ownerId: number;

  @ApiProperty({ description: 'a simple string for comparison' })
  ownerName: string;

  @ApiProperty({
    description: 'A full owner name that has better presentation.',
  })
  ownerNameDisplay: string;

  @ApiProperty({ description: 'A description of the location or sensor.' })
  description: string;

  @ApiProperty({ description: 'A URL with more information about the sensor or owner.' })
  url: string;

  @ApiProperty({
    description: "Type of the sensor, e.g., 'Reference' or 'Small Sensor'.",
  })
  sensorType: string;

  @ApiProperty({ description: 'An array of licenses under which the data is provided.' })
  licenses: string[];

  @ApiProperty({ description: 'Entity that provide the sensor data' })
  dataProvider: string;

  @ApiProperty({ description: 'From what platform is the data obtained' })
  dataSource: string;

  @ApiProperty({ description: 'The timezone of the location, e.g., "Asia/Bangkok".' })
  timezone: string;

  constructor(partial: Partial<Location>) {
    Object.assign(this, partial);
  }
}

export default Location;
