import { AnnotationOptions } from 'chartjs-plugin-annotation';
import { useWindowSize } from '@vueuse/core';

import { MEASURE_UNITS } from '~/constants/shared/measure-units';
import { useGeneralConfigStore } from '~/store/general-config-store';
import { HistoryPeriodConfig, MeasureNames } from '~/types';
import { getChartFontSize, getCO2Color, getPM25Color } from '~/utils';
import { pm25ToAQI } from '~/utils/aqi';

export function useChartJsAnnotations({
  data,
  showWHO = true,
  showAverage = true
}: {
  data: number[];
  showWHO?: boolean;
  showAverage?: boolean;
}): Record<string, AnnotationOptions> {
  const { width } = useWindowSize();

  const { selectedHistoryPeriod: period, selectedMeasure: measure } = useGeneralConfigStore();

  const fontSize = getChartFontSize(measure);
  const { avgXAdjust, WHOXAdjust } = getAnnotationLabelXAdjust(measure, width.value);

  const annotations: Record<string, AnnotationOptions> = {};

  if (showWHO && (measure === MeasureNames.PM25 || measure === MeasureNames.PM_AQI)) {
    annotations.who = createWHOAnnotation(measure, fontSize, WHOXAdjust, width.value);
  }

  if (showAverage) {
    const avgData = getAveragesData(data, measure, period);
    if (avgData) {
      annotations.avgLine = createAverageAnnotation(avgData, fontSize, avgXAdjust);
    }
  }

  return annotations;
}

function getAveragesData(
  data: number[],
  measure: string,
  period: HistoryPeriodConfig
): {
  avgValue: number;
  avgColor: string;
  avgPeriodLabel: string;
  avgLabel: string;
} | null {
  if (!data.length) return null;

  const isCO2 = measure === MeasureNames.CO2;
  const averageApproximation = isCO2 ? 0 : 1;
  const avgLabel = MEASURE_UNITS[measure] || '';

  const total = data.reduce((sum, val) => sum + val, 0);
  let avgValue = total / data.length;

  avgValue = Number(avgValue.toFixed(averageApproximation));
  const avgColor = isCO2
    ? getCO2Color(avgValue, true)?.bgColor
    : getPM25Color(avgValue, true)?.bgColor;

  if (measure === MeasureNames.PM_AQI) {
    avgValue = pm25ToAQI(avgValue);
  }

  const avgPeriodLabel = period.label.replace('Last', '').trim();

  return {
    avgValue,
    avgColor,
    avgLabel,
    avgPeriodLabel
  };
}

function getAnnotationLabelXAdjust(
  measure: string,
  width: number
): {
  avgXAdjust: number;
  WHOXAdjust: number;
} {
  const isPM25 = measure === MeasureNames.PM25 || measure === MeasureNames.PM_AQI;

  if (width < 450) return { avgXAdjust: isPM25 ? 140 : 3, WHOXAdjust: 3 };
  if (width < 768) return { avgXAdjust: isPM25 ? 210 : 10, WHOXAdjust: 10 };

  return { avgXAdjust: isPM25 ? 240 : 10, WHOXAdjust: 10 };
}

function createWHOAnnotation(
  measure: string,
  fontSize: number,
  xAdjust: number,
  width: number
): AnnotationOptions {
  const isAQI = measure === MeasureNames.PM_AQI;
  const yValue = isAQI ? 21 : 5;
  const label = width < 450 ? 'WHO Annual AQ Guideline' : 'WHO Annual Air Quality Guideline';

  return {
    display: true,
    drawTime: 'afterDatasetsDraw',
    type: 'line',
    yMin: yValue,
    yMax: yValue,
    borderColor: '#badbf5',
    borderWidth: 2,
    label: {
      display: true,
      backgroundColor: '#badbf5',
      position: 'start',
      padding: 4,
      font: { family: '"Cabin", sans-serif', size: fontSize },
      xAdjust,
      content: label
    }
  };
}

function createAverageAnnotation(
  data: ReturnType<typeof getAveragesData>,
  fontSize: number,
  xAdjust: number
): AnnotationOptions {
  const { avgValue, avgColor, avgLabel, avgPeriodLabel } = data;

  return {
    display: true,
    drawTime: 'afterDatasetsDraw',
    type: 'line',
    yMin: avgValue,
    yMax: avgValue,
    borderColor: avgColor,
    borderWidth: 2,
    borderDash: [2, 2],
    label: {
      display: true,
      backgroundColor: avgColor,
      position: 'start',
      padding: 4,
      font: { family: '"Cabin", sans-serif', size: fontSize },
      xAdjust,
      content: `${avgPeriodLabel} Average: ${avgValue}${avgLabel}`
    }
  };
}
