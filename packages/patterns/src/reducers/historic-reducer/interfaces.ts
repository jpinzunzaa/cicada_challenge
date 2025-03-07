export interface Metadata {
  information: string;
  from_symbol: string;
  to_symbol: string;
  output_size: string;
  last_refreshed: string;
  timezone: string;
}

export interface TimeSeries {
  close: number;
  date: string;
  high: number;
  low: number;
  open: number;
}

export interface HistoricState {
  currency: string | null;
  metadata: Metadata | null;
  time_series: TimeSeries | null;
}

export enum HistoricActionTypes {
  SET_CURRENCY = 'SET_CURRENCY',
  SET_METADATA = 'SET_METADATA',
  SET_TIME_SERIES = 'SET_TIME_SERIES',
}

export interface SetCurrencyAction {
  type: HistoricActionTypes.SET_CURRENCY;
  payload: string;
}

export interface SetMetadataAction {
  type: HistoricActionTypes.SET_METADATA;
  payload: Metadata;
}

export interface SetTimeSeriesAction {
  type: HistoricActionTypes.SET_TIME_SERIES;
  payload: TimeSeries;
}

export type HistoricActions = SetCurrencyAction | SetMetadataAction | SetTimeSeriesAction;