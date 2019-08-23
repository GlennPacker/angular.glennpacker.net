import { Action } from '@ngrx/store';
import { Qualification } from '../qualification';

export enum QualificationActionTypes {
    Load = '[Qualification] Load',
    LoadSuccess = '[Qualification] Load Success',
    LoadFail = '[Qualification] Load Fail',
}

export class Load implements Action {
    readonly type = QualificationActionTypes.Load;
}

export class LoadFail implements Action {
    readonly type = QualificationActionTypes.LoadFail;

    constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
    readonly type = QualificationActionTypes.LoadSuccess;

    constructor(public payload: Qualification[]) { }
}

export type QualificationActions =
    Load
    | LoadFail
    | LoadSuccess;
