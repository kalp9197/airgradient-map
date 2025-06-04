/**
 * @fileoverview Color constants that correspond to _variables.scss color definitions
 */

import { ChartColorsType } from '~/types/shared/colors';

export const CHART_COLORS_CSS_VARS: Record<ChartColorsType, string> = {
  [ChartColorsType.GREEN]: '#1de208',
  [ChartColorsType.YELLOW]: '#e2e020',
  [ChartColorsType.ORANGE]: '#e26a05',
  [ChartColorsType.RED]: '#e20410',
  [ChartColorsType.PURPLE]: '#7f01e2',
  [ChartColorsType.BROWN]: '#903305',
  [ChartColorsType.BLUE]: '#1b75bc',
  [ChartColorsType.GRAY]: '#778899',
  [ChartColorsType.LIGHTGRAY]: '#d5d5d5',
  [ChartColorsType.DEFAULT]: '#d5d5d5'
};

export const CHART_COLORS_DARKENED_CSS_VARS: Record<ChartColorsType, string> = {
  [ChartColorsType.GREEN]: '#2b9b20',
  [ChartColorsType.YELLOW]: '#c7ac1d',
  [ChartColorsType.ORANGE]: '#b94f04',
  [ChartColorsType.RED]: '#881218',
  [ChartColorsType.PURPLE]: '#521681',
  [ChartColorsType.BROWN]: '#903305',
  [ChartColorsType.BLUE]: '#02579a',
  [ChartColorsType.GRAY]: '#7c7c7c',
  [ChartColorsType.LIGHTGRAY]: '#989696',
  [ChartColorsType.DEFAULT]: '#989696'
};
