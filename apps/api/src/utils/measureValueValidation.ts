import { MeasureType } from "./measureTypeQuery";
import * as Constants from "../constants"

export function getMeasureValidValueRange(measureType: MeasureType) {
  var minVal = 0;
  var maxVal = 0;
  switch (measureType) {
    case MeasureType.PM25:
      minVal = Constants.VALID_PM25_MIN;
      maxVal = Constants.VALID_PM25_MAX;
      break;
    case MeasureType.RCO2:
      minVal = Constants.VALID_CO2_MIN;
      maxVal = Constants.VALID_CO2_MAX;
      break;
    case MeasureType.ATMP:
      minVal = Constants.VALID_TEMPERATURE_MIN;
      maxVal = Constants.VALID_TEMPERATURE_MAX;
      break;
    case MeasureType.RHUM:
      minVal = Constants.VALID_HUMIDITY_MIN;
      maxVal = Constants.VALID_HUMIDITY_MAX;
      break;
    default:
      // NOTE: Add another type
      break;
  }

  return {minVal, maxVal};
}
