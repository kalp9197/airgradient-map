export interface DialogInstance<T = unknown> {
  dialogId: DialogId;
  isOpen: boolean;
  data: T;
}

export enum DialogId {
  LOCATION_HISTORY_CHART = 'location-history-chart'
}
