import { MeasureType } from './measureTypeQuery';
import * as Constants from '../constants';
import { MeasureValueValidationConfig } from 'src/types/shared/measure-value-validation';

export function getMeasureValidValueRange(measureType: MeasureType): MeasureValueValidationConfig {
  let minVal = 0;
  let maxVal = 0;
  let hasValidation = true;

  switch (measureType) {
    case MeasureType.pm25:
      minVal = Constants.VALID_PM25_MIN;
      maxVal = Constants.VALID_PM25_MAX;
      break;
    case MeasureType.rco2:
      minVal = Constants.VALID_CO2_MIN;
      maxVal = Constants.VALID_CO2_MAX;
      break;
    case MeasureType.atmp:
      minVal = Constants.VALID_TEMPERATURE_MIN;
      maxVal = Constants.VALID_TEMPERATURE_MAX;
      break;
    case MeasureType.rhum:
      minVal = Constants.VALID_HUMIDITY_MIN;
      maxVal = Constants.VALID_HUMIDITY_MAX;
      break;
    default:
      minVal = null;
      maxVal = null;
      hasValidation = false;
      break;
  }

  return { minVal, maxVal, hasValidation };
}
