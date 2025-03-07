import { HistoricState, HistoricActionTypes, HistoricActions } from './interfaces';

export const initial_state: HistoricState = {
  currency: null,
  metadata: null,
  time_series: null,
}

export const historic_reducer = (state: HistoricState, action: HistoricActions): HistoricState => {
  switch (action.type) {
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
