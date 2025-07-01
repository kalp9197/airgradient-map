import { HistoryPeriod, HistoryBucket, HistoryPeriodUnit, HistoryPeriodConfig } from '~/types';

export const HISTORY_PERIODS: HistoryPeriodConfig[] = [
  {
    unit: HistoryPeriodUnit.HOUR,
    count: 24,
    label: 'Last 24 Hours',
    defaultBucketSize: HistoryBucket.MINUTES_15,
    value: HistoryPeriod.DAY,
    chartUnit: HistoryPeriodUnit.HOUR
  },
  {
    unit: HistoryPeriodUnit.DAY,
    count: 7,
    label: 'Last Week',
    defaultBucketSize: HistoryBucket.HOUR,
    value: HistoryPeriod.WEEK,
    chartUnit: HistoryPeriodUnit.HOUR
  },
  {
    unit: HistoryPeriodUnit.MONTH,
    count: 1,
    label: 'Last Month',
    defaultBucketSize: HistoryBucket.HOUR_8,
    value: HistoryPeriod.MONTH,
    chartUnit: HistoryPeriodUnit.DAY
  },
  {
    unit: HistoryPeriodUnit.MONTH,
    count: 3,
    label: 'Last 3 Months',
    defaultBucketSize: HistoryBucket.DAY,
    value: HistoryPeriod.MONTHS_3,
    chartUnit: HistoryPeriodUnit.DAY
  }

  // Temporarily disabled

  // {
  //   unit: HistoryPeriodUnit.MONTH,
  //   count: 6,
  //   label: 'Last 6 Months',
  //   defaultBucketSize: HistoryBucket.DAY,
  //   value: HistoryPeriod.MONTHS_6,
  //   chartUnit: HistoryPeriodUnit.DAY
  // },
  // {
  //   unit: HistoryPeriodUnit.WEEK,
  //   count: 52,
  //   label: 'Last Year',
  //   defaultBucketSize: HistoryBucket.WEEK,
  //   value: HistoryPeriod.YEAR,
  //   chartUnit: HistoryPeriodUnit.WEEK
  // }
];
