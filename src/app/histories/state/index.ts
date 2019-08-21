import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HistoryState } from './history.reducer';

export interface State extends fromRoot.State {
    cleints: HistoryState;
}

const getHistoryFeatureState = createFeatureSelector<HistoryState>('history');

export const getHistories = createSelector(
    getHistoryFeatureState,
    state => state.list
);

export const getError = createSelector(
    getHistoryFeatureState,
    state => state.error
);
