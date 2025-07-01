export interface AGMapData {
  data: Array<AGMapLocationData | AGMapClusterData>;
  page: number;
  pagesize: number;
  total: number;
}

export interface AGMapLocationData extends AGMapDataItem {
  locationId: number;
  locationName: string;
  sensorType?: SensorType;
}

export interface AGMapClusterData extends AGMapDataItem {
  sensorsCount: number;
}

export interface AGMapDataItem {
  latitude: number;
  longitude: number;
  type: AGMapDataItemType;
  value: number;
}

export enum AGMapDataItemType {
  sensor = 'sensor',
  cluster = 'cluster'
}

export enum SensorType {
  reference = 'Reference',
  DIY = 'DIY',
  smallSensor = 'Small Sensor'
}
