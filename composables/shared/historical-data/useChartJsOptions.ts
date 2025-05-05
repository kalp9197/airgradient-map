import { ChartOptions } from 'chart.js';
import { AnnotationPluginOptions } from 'chartjs-plugin-annotation';
import { useGeneralConfigStore } from '~/store/general-config-store';

import { MeasureNames } from '~/types';
import { getChartFontSize } from '~/utils';

interface UseChartjsOptionsParams {
  measure: MeasureNames;
  animated: boolean;
  annotations: AnnotationPluginOptions[];
}

export function useChartjsOptions({
  measure,
  animated,
  annotations
}: UseChartjsOptionsParams): ChartOptions<'bar'> {
  const annotationsFontSize = getChartFontSize(measure);
  const currentPeriod = useGeneralConfigStore().selectedHistoryPeriod;

  let axisLabel = '';
  if (measure === MeasureNames.PM25) axisLabel = 'PM2.5 in μg/m³';
  if (measure === MeasureNames.PM_AQI) axisLabel = 'PM2.5 in US AQI';

  return {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: context => {
            const value = context.raw;
            if (measure === MeasureNames.PM25) return `PM2.5: ${value} μg/m³`;
            if (measure === MeasureNames.PM_AQI) return `PM2.5: ${value} US AQI`;
            return `CO2: ${value} ppm`;
          }
        },
        titleFont: { family: '"Cabin", sans-serif' },
        bodyFont: { family: '"Catamaran", sans-serif' }
      },
      annotation: {
        annotations
      }
    },
    animation: {
      duration: animated ? 1000 : 0
    },
    scales: {
      x: {
        offset: false,
        display: true,
        type: 'time',
        ticks: {
          color: '#212121',
          font: {
            family: '"Catamaran", sans-serif',
            size: annotationsFontSize
          }
        },
        grid: {
          display: false,
          drawOnChartArea: false,
          drawTicks: false
        },
        time: {
          tooltipFormat: 'dd. MMM  HH:mm',
          unit: currentPeriod.chartUnit,
          displayFormats: {
            quarter: 'MMM YYYY'
          }
        }
      },
      y: {
        beginAtZero: true,
        suggestedMax: 8,
        title: {
          display: false,
          text: axisLabel
        },
        grid: {
          drawTicks: false,
          drawOnChartArea: false
        },
        ticks: {
          color: '#212121',
          font: {
            family: '"Catamaran", sans-serif',
            size: annotationsFontSize
          },
          padding: 3
        }
      }
    }
  };
}
