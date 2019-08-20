import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientState } from './client.reducer';

export interface State extends fromRoot.State {
    cleints: ClientState;
}

const getProductFeatureState = createFeatureSelector<ClientState>('clients');

export const getClients = createSelector(
    getProductFeatureState,
    state => state.list
);

export const getError = createSelector(
    getProductFeatureState,
    state => state.error
);
