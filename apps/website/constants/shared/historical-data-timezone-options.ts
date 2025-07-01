import { HistoricalDataTimeZone, HistoricalDataTimeZoneConfig } from '~/types';

export const HISTORICAL_DATA_TIMEZONE_OPTIONS: HistoricalDataTimeZoneConfig[] = [
  { value: HistoricalDataTimeZone.LOCAL, label: 'Local Timezone' },
  { value: HistoricalDataTimeZone.USER, label: 'My Timezone' }
];
