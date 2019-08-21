import { Action } from '@ngrx/store';
import { History } from '../history';

export enum HistoryActionTypes {
    Load = '[History] Load',
    LoadSuccess = '[History] Load Success',
    LoadFail = '[History] Load Fail',
}

export class Load implements Action {
    readonly type = HistoryActionTypes.Load;
}

export class LoadFail implements Action {
    readonly type = HistoryActionTypes.LoadFail;

    constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
    readonly type = HistoryActionTypes.LoadSuccess;

    constructor(public payload: History[]) { }
}

export type HistoryActions =
    Load
    | LoadFail
    | LoadSuccess;
