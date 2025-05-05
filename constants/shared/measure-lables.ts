import { MeasureNames } from '~/types';

export const MEASURE_LABELS: Record<MeasureNames, string> = {
  [MeasureNames.PM25]: 'PM2.5',
  [MeasureNames.PM_AQI]: 'US AQI (PM2.5)',
  [MeasureNames.CO2]: 'CO2'
};
