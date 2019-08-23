import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QualificationState } from './qualification.reducer';

export interface State extends fromRoot.State {
    cleints: QualificationState;
}

const getQualificationFeatureState = createFeatureSelector<QualificationState>('qualification');

export const getQualifications = createSelector(
    getQualificationFeatureState,
    state => state.list
);

export const getError = createSelector(
    getQualificationFeatureState,
    state => state.error
);
