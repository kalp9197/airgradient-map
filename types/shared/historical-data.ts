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
  MINUTE = 'minute'
}


export interface HistoryBucketConfig {
  label: string;
  value: HistoryBucket;
  bucketSize: string;
}

export enum HistoryBucket {
  MINUTES_5= 'minutes_5',
  MINUTES_15= 'minutes_15',
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}

export interface HistoryPeriodConfig {
  unit: HistoryPeriodUnit;
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
  '90_days' = '90_days',
}

