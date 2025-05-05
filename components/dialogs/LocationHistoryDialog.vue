Location
<template>
  <UiDialog
    :title="props.dialog?.data.location.locationName"
    :size="DialogSize.XL"
    :hideFooter="true"
    :dialog="props.dialog"
  >
    <template #header>
      <UiProgressBar :show="loading"></UiProgressBar>
      <v-card-title>
        <div class="d-flex align-center justify-center gap-2 gap-md-3 pl-2 py-2 pr-7 flex-wrap">
          <h5 class="m-0">{{ mapLocationData?.locationName }}</h5>
          <v-chip>
            {{
              mapLocationData?.sensorType === SensorType.reference ? 'Reference' : 'Small Sensor'
            }}</v-chip
          >
        </div>
      </v-card-title>
    </template>
    <template #body>
      <div class="chart-controls mb-5">
        <div
          v-if="currentValueData"
          :style="{ backgroundColor: currentValueData.bgColor }"
          class="current-values py-2 px-3"
        >
          <div :class="currentValueData.textColor" class="main-current-value">
            <h4 :class="currentValueData.textColor" class="mb-1">
              {{ currentValueData.value }}
              <span class="unit-label">{{ currentValueData.unit }}</span>
            </h4>
            <p :class="currentValueData.textColor" class="mb-0 current-label">
              Current {{ currentValueData.label }}
            </p>
          </div>
          <div>
            <p :class="currentValueData.textColor" class="mb-0">
              <img
                class="measure-icon"
                width="18px"
                src="/images/icons/temperature_icon.svg"
                alt="temperature"
              />
              22 °C
            </p>
            <p :class="currentValueData.textColor" class="mb-0">
              <img
                class="measure-icon"
                width="18px"
                src="/images/icons/humidity_icon.svg"
                alt="humidity"
              />
              63 %
            </p>
          </div>
        </div>
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
        <div style="height: 400px; width: 100%">
          <Bar v-if="chartData && chartOptions" :data="chartData" :options="chartOptions" />
        </div>
      </ClientOnly>
    </template>
  </UiDialog>
</template>

<script setup lang="ts">
  import {
    DialogSize,
    HistoryPeriod,
    HistoryPeriodConfig,
    MeasureNames,
    SensorType
  } from '~/types';
  import { onMounted, ref, Ref, watch, computed } from 'vue';
  import { Bar } from 'vue-chartjs';
  import { ChartData, ChartOptions } from 'chart.js';

  import { DialogInstance, AGMapLocationData, LocationHistoryData } from '~/types';
  import { useGeneralConfigStore } from '~/store/general-config-store';
  import { useRuntimeConfig } from 'nuxt/app';
  import { getDateRangeFromToday } from '~/utils/date';
  import { HISTORY_PERIODS } from '~/constants/shared/chart-periods';
  import { useChartjsOptions } from '~/composables/shared/historical-data/useChartJsOptions';
  import { useChartjsData } from '~/composables/shared/historical-data/useChartJsData';
  import { MEASURE_LABELS } from '~/constants/shared/measure-lables';
  import { pm25ToAQI } from '~/utils/aqi';
  import { getAQIColor, getPM25Color } from '~/utils';
  import { MEASURE_UNITS } from '~/constants/shared/measure-units';

  const props = defineProps<{
    dialog: DialogInstance<{ location: AGMapLocationData }>;
  }>();

  const apiUrl = useRuntimeConfig().public.apiUrl;
  const generalConfigStore = useGeneralConfigStore();
  const mapLocationData: Ref<AGMapLocationData> = ref(null);
  const locationHistoryData: Ref<LocationHistoryData> = ref(null);
  const chartData: Ref<ChartData<'bar'>> = ref(null);
  const chartOptions: Ref<ChartOptions<'bar'>> = ref(null);
  const currentValueData: Ref<{
    bgColor: string;
    value: number;
    textColor: string;
    label: string;
    unit: string;
  }> = computed(() => {
    if (!mapLocationData.value) {
      return null;
    }
    let colorConfig: { bgColor: string; textColorClass: string } = {
      bgColor: '',
      textColorClass: ''
    };

    let value = mapLocationData.value.value;
    if (generalConfigStore.selectedMeasure === MeasureNames.PM_AQI) {
      value = pm25ToAQI(mapLocationData.value.value);
      colorConfig = getAQIColor(value);
    } else {
      colorConfig = getPM25Color(value);
    }
    return {
      bgColor: colorConfig.bgColor,
      value: value,
      unit: MEASURE_UNITS[generalConfigStore.selectedMeasure],
      label: MEASURE_LABELS[generalConfigStore.selectedMeasure],
      textColor: colorConfig.textColorClass
    };
  });
  const loading: Ref<boolean> = ref(false);

  onMounted(() => {
    mapLocationData.value = props.dialog?.data.location;
    if (mapLocationData.value) {
      console.log(mapLocationData.value);
      fetchLocationHistory(mapLocationData.value.locationId);
    }
  });

  async function fetchLocationHistory(locationId: number): Promise<LocationHistoryData> {
    loading.value = true;
    const { start, end } = getDateRangeFromToday(
      generalConfigStore.selectedHistoryPeriod.unit,
      generalConfigStore.selectedHistoryPeriod.count
    );
    const measure =
      generalConfigStore.selectedMeasure === MeasureNames.PM_AQI
        ? MeasureNames.PM25
        : generalConfigStore.selectedMeasure;

    try {
      const response = await $fetch<LocationHistoryData>(
        `${apiUrl}/locations/${locationId}/measures/history`,
        {
          params: {
            start,
            end,
            bucketSize: generalConfigStore.selectedHistoryPeriod.defaultBucketSize,
            measure
          },
          retry: 1
        }
      );
      locationHistoryData.value = response;

      return response;
    } catch (error) {
      console.error('Failed to fetch location history:', error);
      return null;
    } finally {
      loading.value = false;
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
        measure: generalConfigStore.selectedMeasure
      });
      chartData.value = data;

      chartOptions.value = useChartjsOptions({
        measure: generalConfigStore.selectedMeasure,
        animated: true,
        annotations: []
      });
    }
  });
</script>

<style lang="scss" scoped>
  .chart-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .period-control {
    max-width: 200px;
  }

  .current-values {
    border-radius: 5px;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
  }

  .main-current-value {
    padding-right: 15px;
    border-right: 1px solid var(--main-text-color);

    &.text-light {
      border-right: 1px solid var(--main-white-color);
    }
  }

  .text-dark .measure-icon {
    filter: brightness(0) invert(0);
  }

  .unit-label {
    font-size: var(--font-size-sm);
  }

  .current-label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
  }
</style>
