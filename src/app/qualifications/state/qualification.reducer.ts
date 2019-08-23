import { QualificationActions, QualificationActionTypes } from './qualification.actions';
import { Qualification } from '../qualification';

export interface QualificationState {
    list: Qualification[];
    error: string;
}
const initialState: QualificationState = {
    list: [],
    error: ''
};

export function reducer(state = initialState, action: QualificationActions): QualificationState {
    switch (action.type) {
        case QualificationActionTypes.LoadSuccess:
            return {
                ...state,
                list: [...action.payload],
                error: null
            };
        case QualificationActionTypes.LoadFail:
            return {
                ...state,
                list: [],
                error: action.payload
            };
        default:
            return state;
    }
}

