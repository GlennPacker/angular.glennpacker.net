import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QualificationState } from './qualification.reducer';

export interface State extends fromRoot.State {
    cleints: QualificationState;
}

const getQualificationFeatureState = createFeatureSelector<QualificationState>('qualification');

export const getAll = createSelector(
    getQualificationFeatureState,
    state => state.list
);

export const getFrontEnd = createSelector(
    getAll,
    state => state.filter(q => !q.isBackEnd)
);

export const getSPA = createSelector(
    getFrontEnd,
    state => state.filter(q => q.isAngular || q.isReact || q.isVue)
);

export const getBackEnd = createSelector(
    getAll,
    state => state.filter(q => q.isBackEnd)
);

export const getError = createSelector(
    getQualificationFeatureState,
    state => state.error
);
