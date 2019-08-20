import { ClientActions, ClientActionTypes } from './client.actions';
import { Client } from '../client';

export interface ClientState {
  list: Client[];
  error: string;
}
const initialState: ClientState = {
  list: [],
  error: ''
};

export function reducer(state = initialState, action: ClientActions): ClientState {
  switch (action.type) {
    case ClientActionTypes.LoadSuccess:
      return {
        ...state,
        list: [...action.payload],
        error: null
      };
    case ClientActionTypes.LoadFail:
      console.log('reducer', action.payload);
      return {
        ...state,
        list: [],
        error: action.payload
      };
    default:
      return state;
  }
}

