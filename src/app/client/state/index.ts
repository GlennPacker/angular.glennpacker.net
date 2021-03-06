import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientState } from './client.reducer';

export interface State extends fromRoot.State {
    cleints: ClientState;
}

const getClientFeatureState = createFeatureSelector<ClientState>('clients');

export const getClients = createSelector(
    getClientFeatureState,
    state => state.list
);

export const getError = createSelector(
    getClientFeatureState,
    state => state.error
);
