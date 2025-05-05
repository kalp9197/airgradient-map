import { HistoryPeriod, HistoryPeriodConfig, MeasureNames } from '../shared';

export type GeneralConfigStoreState = {
  selectedMeasure: MeasureNames;
  selectedHistoryPeriod: HistoryPeriodConfig;
};
