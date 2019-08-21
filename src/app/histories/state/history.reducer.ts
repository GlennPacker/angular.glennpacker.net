import { HistoryActions, HistoryActionTypes } from './history.actions';
import { History } from '../history';

export interface HistoryState {
  list: History[];
  error: string;
}
const initialState: HistoryState = {
  list: [],
  error: ''
};

export function reducer(state = initialState, action: HistoryActions): HistoryState {
  switch (action.type) {
    case HistoryActionTypes.LoadSuccess:
      return {
        ...state,
        list: [...action.payload],
        error: null
      };
    case HistoryActionTypes.LoadFail:
      return {
        ...state,
        list: [],
        error: action.payload
      };
    default:
      return state;
  }
}

