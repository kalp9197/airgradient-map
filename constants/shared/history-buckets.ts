import { HistoryBucket, HistoryBucketConfig } from '~/types';

export const HISTORY_BUCKETS: HistoryBucketConfig[] = [
  {
    label: '1h',
    value: HistoryBucket.HOUR,
    bucketSize: '1h'
  },
  {
    label: '1d',
    value: HistoryBucket.DAY,
    bucketSize: '1d'
  },
  
];
