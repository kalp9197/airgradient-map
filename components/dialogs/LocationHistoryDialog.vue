Location
<template>
  <UiDialog
    :title="props.dialog?.data.location.locationName"
    :size="DialogSize.XL"
    :hideFooter="true"
    :dialog="props.dialog"
  >
    <template #header>
      <div class="d-flex align-center justify-center gap-2 gap-md-3 pl-2 py-2 pr-5 flex-wrap">
        <h5 class="m-0">{{ mapLocationData?.locationName }}</h5>
        <v-chip>
          {{
            mapLocationData?.sensorType === SensorType.reference ? 'Reference' : 'Small Sensor'
          }}</v-chip
        >
      </div>
    </template>
    <template #body>
      <div class="chart-controls">
        <UiDropdownControl
          class="period-control"
          :selected-value="generalConfigStore.selectedHistoryPeriod.value"
          :options="HISTORY_PERIODS"
          :disabled="loading"
          @change="handleChartPeriodChange"
        >
        </UiDropdownControl>
      </div>

      <ClientOnly>
        <div style="height: 400px; width: 100%;">
          <Bar v-if="chartData && chartOptions" :data="chartData" :options="chartOptions" />
        </div>
      </ClientOnly>
    </template>
  </UiDialog>
</template>

<script setup lang="ts">
  import { DialogSize, HistoryPeriod, HistoryPeriodConfig, SensorType } from '~/types';
  import { onMounted, ref, Ref, watch } from 'vue';
  import { Bar } from 'vue-chartjs';
  import { ChartData, ChartOptions } from 'chart.js'; 

  import { DialogInstance, AGMapLocationData, LocationHistoryData } from '~/types';
  import { useGeneralConfigStore } from '~/store/general-config-store';
  import { useRuntimeConfig } from 'nuxt/app';
  import { getDateRangeFromToday } from '~/utils/date';
  import { HISTORY_PERIODS } from '~/constants/shared/chart-periods';
import { useChartjsOptions } from '~/composables/shared/historical-data/useChartJsOptions';
import { useChartjsData } from '~/composables/shared/historical-data/useChartJsData';
  const apiUrl = useRuntimeConfig().public.apiUrl;
  const generalConfigStore = useGeneralConfigStore();

  const props = defineProps<{
    dialog: DialogInstance<{ location: AGMapLocationData }>;
  }>();

  const mapLocationData: Ref<AGMapLocationData> = ref(null);
  const locationHistoryData: Ref<LocationHistoryData> = ref(null); 
  const chartData: Ref<ChartData<'bar'>> = ref(null);
  const chartOptions: Ref<ChartOptions<'bar'>> = ref(null);

  const loading: Ref<boolean> = ref(false);

  onMounted(() => {
    mapLocationData.value = props.dialog?.data.location;
    if (mapLocationData.value) {
      fetchLocationHistory(mapLocationData.value.locationId);
    }
  });

  async function fetchLocationHistory(locationId: number): Promise<LocationHistoryData> {
    const { start, end } = getDateRangeFromToday(
      generalConfigStore.selectedHistoryPeriod.unit,
      generalConfigStore.selectedHistoryPeriod.count
    );
    console.log(generalConfigStore.selectedHistoryPeriod);
    try {
      const response = await $fetch<LocationHistoryData>(
        `${apiUrl}/locations/${locationId}/measures/history`,
        {
          params: {
            start,
            end,
            bucketSize: generalConfigStore.selectedHistoryPeriod.defaultBucketSize,
            measure: generalConfigStore.selectedMeasure
          },
          retry: 1
        }
      );
      locationHistoryData.value = response;

      return response;
    } catch (error) {
      console.error('Failed to fetch location history:', error);
      return null;
    }
  }

  function handleChartPeriodChange(period: HistoryPeriod) {
    const periodConfig = HISTORY_PERIODS.find(
      (periodConfig: HistoryPeriodConfig) => periodConfig.value === period
    );
    useGeneralConfigStore().setSelectedHistoryPeriod(periodConfig);
    fetchLocationHistory(mapLocationData.value.locationId);
  }


  watch(locationHistoryData, (newData: LocationHistoryData) => {
  if (newData && newData.data) {

    const { chartData: data } = useChartjsData({
      data: newData.data,
      measure: generalConfigStore.selectedMeasure,
    });
    chartData.value = data;


    chartOptions.value = useChartjsOptions({
      measure: generalConfigStore.selectedMeasure,
      animated: true, 
      annotations: [], 
    });
  }
});
</script>

<style scoped>
  .chart-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }

  .period-control {
    max-width: 200px;
  }
</style>
