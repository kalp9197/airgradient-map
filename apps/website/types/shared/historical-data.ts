export interface LocationHistoryData {
  data: LocationHistoryDataItem[];
  total: number;
  page: number | null;
  pagesize: number | null;
}

export interface LocationHistoryDataItem {
  timebucket: string;
  value: string;
}

export enum HistoryPeriodUnit {
  MONTH = 'month',
  DAY = 'day',
  HOUR = 'hour',
  MINUTE = 'minute',
  WEEK = 'week'
}

export enum HistoryBucket {
  MINUTES_5 = '5m',
  MINUTES_15 = '15m',
  HOUR = '1h',
  HOUR_8 = '8h',
  DAY = '1d',
  WEEK = '1w',
  MONTH = '1m'
}

export interface HistoryPeriodConfig {
  unit: HistoryPeriodUnit;
  chartUnit: HistoryPeriodUnit;
  count: number;
  label: string;
  defaultBucketSize: HistoryBucket;
  value: HistoryPeriod;
}

export enum HistoryPeriod {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  MONTHS_3 = '3_months',
  MONTHS_6 = '6_months',
  YEAR = 'year'
}

export enum HistoricalDataTimeZone {
  LOCAL = 'local',
  USER = 'user'
}

export interface HistoricalDataTimeZoneConfig {
  value: HistoricalDataTimeZone;
  label: string;
}
