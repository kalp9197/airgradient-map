import { HistoryPeriod, HistoryBucket, HistoryPeriodUnit, HistoryPeriodConfig } from '~/types';

export const HISTORY_PERIODS: HistoryPeriodConfig[] = [
  {
    unit: HistoryPeriodUnit.HOUR,
    count: 12,
    label: 'Last 12 Hours',
    defaultBucketSize: HistoryBucket.MINUTES_15,
    value: HistoryPeriod['12_hours']
  },
  {
    unit: HistoryPeriodUnit.HOUR,
    count: 24,
    label: 'Last 24 Hours',
    defaultBucketSize: HistoryBucket.MINUTES_15,
    value: HistoryPeriod['24_hours']
  },
  {
    unit: HistoryPeriodUnit.DAY,
    count: 2,
    label: 'Last 2 Days',
    defaultBucketSize: HistoryBucket.HOUR,
    value: HistoryPeriod['2_days']
  },
  {
    unit: HistoryPeriodUnit.DAY,
    count: 7,
    label: 'Last 7 Days',
    defaultBucketSize: HistoryBucket.HOUR,
    value: HistoryPeriod['7_days']
  },
  {
    unit: HistoryPeriodUnit.DAY,
    count: 14,
    label: 'Last 2 Weeks',
    defaultBucketSize: HistoryBucket.HOUR,
    value: HistoryPeriod['14_days']
  },
  {
    unit: HistoryPeriodUnit.DAY,
    count: 30,
    label: 'Last Month',
    defaultBucketSize: HistoryBucket.HOUR,
    value: HistoryPeriod['30_days']
  },
  {
    unit: HistoryPeriodUnit.MONTH,
    count: 2,
    label: 'Last 2 Months',
    defaultBucketSize: HistoryBucket.DAY,
    value: HistoryPeriod['60_days']
  },
  {
    unit: HistoryPeriodUnit.MONTH,
    count: 3,
    label: 'Last 3 Months',
    defaultBucketSize: HistoryBucket.DAY,
    value: HistoryPeriod['90_days']
  }
];
