import { defineStore } from 'pinia';
import { HISTORY_PERIODS } from '~/constants/shared/chart-periods';
import { HistoryPeriodConfig } from '~/types';

import { MeasureNames } from '~/types';
import { GeneralConfigStoreState } from '~/types/store/general-config-store';

export const useGeneralConfigStore = defineStore('generalConfig', {
  state: (): GeneralConfigStoreState => ({
    selectedMeasure: MeasureNames.PM25,
    selectedHistoryPeriod: HISTORY_PERIODS[0]
  }),
  actions: {
    setSelectedMeasure(measure: MeasureNames) {
      this.selectedMeasure = measure;
    },
    setSelectedHistoryPeriod(period: HistoryPeriodConfig) {
      this.selectedHistoryPeriod = period;
    }
  }
});
