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
  pairs: [];
  pair: string | null;
  loading_pair: boolean;
  currency: string | null;
  metadata: Metadata | null;
  time_series: TimeSeries[];
}

export enum HistoricActionTypes {
  SET_PAIRS = 'SET_PAIRS',
  SET_PAIR = 'SET_PAIR',
  SET_LOADING_PAIR = 'SET_LOADING_PAIR',
  SET_CURRENCY = 'SET_CURRENCY',
  SET_METADATA = 'SET_METADATA',
  SET_TIME_SERIES = 'SET_TIME_SERIES',
}

export interface SetPairsAction {
  type: HistoricActionTypes.SET_PAIRS;
  payload: [];
}

export interface SetLoadingPairAction {
  type: HistoricActionTypes.SET_LOADING_PAIR;
  payload: boolean;
}

export interface SetPairAction {
  type: HistoricActionTypes.SET_PAIR;
  payload: string;
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
  payload: TimeSeries[];
}

export type HistoricActions = SetPairsAction | SetLoadingPairAction | SetPairAction | SetCurrencyAction | SetMetadataAction | SetTimeSeriesAction;