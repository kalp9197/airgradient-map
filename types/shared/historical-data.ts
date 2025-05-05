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
  '12_hours' = '12_hours',
  '24_hours' = '24_hours',
  '2_days' = '2_days',
  '7_days' = '7_days',
  '14_days' = '14_days',
  '30_days' = '30_days',
  '60_days' = '60_days',
  '90_days' = '90_days'
}
