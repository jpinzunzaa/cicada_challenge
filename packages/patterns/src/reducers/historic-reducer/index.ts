import { HistoricState, HistoricActionTypes, HistoricActions } from './interfaces';

export const initial_state: HistoricState = {
  pairs: [],
  pair: null,
  loading_pair: true,
  currency: null,
  metadata: null,
  time_series: [],
}

export const historic_reducer = (state: HistoricState, action: HistoricActions): HistoricState => {
  switch (action.type) {
    case HistoricActionTypes.SET_PAIRS: {
      return {
        ...state,
        pairs: action.payload,
      }
    }
    case HistoricActionTypes.SET_PAIR: {
      return {
        ...state,
        pair: action.payload,
      }
    }
    case HistoricActionTypes.SET_CURRENCY: {
      return {
        ...state,
        currency: action.payload,
      }
    }
    case HistoricActionTypes.SET_METADATA: {
      return {
        ...state,
        metadata: action.payload,
      }
    }
    case HistoricActionTypes.SET_TIME_SERIES: {
      return {
        ...state,
        time_series: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}
