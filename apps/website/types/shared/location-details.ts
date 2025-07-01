export interface LocationDetails {
  locationId: number;
  locationName: string;
  latitude: number;
  longitude: number;
  ownerId: number;
  ownerName: string;
  ownerNameDisplay: string;
  description?: string;
  url?: string;
  sensorType: string;
  licenses: string[];
  provider: string;
  dataSource: string;
  timezone: string;
}
