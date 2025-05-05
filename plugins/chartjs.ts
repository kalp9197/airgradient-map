import { defineNuxtPlugin } from 'nuxt/app';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  TimeScale
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import 'chartjs-adapter-luxon';
import 'chartjs-adapter-date-fns';

export default defineNuxtPlugin(() => {
  if (process.client) {
    ChartJS.register(
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale,
      annotationPlugin,
      TimeScale
    );
  }
});
