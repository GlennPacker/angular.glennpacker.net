import { Action } from '@ngrx/store';
import { Client } from '../client';

export enum ClientActionTypes {
    Load = '[Client] Load',
    LoadSuccess = '[Client] Load Success',
    LoadFail = '[Client] Load Fail',
}

export class Load implements Action {
    readonly type = ClientActionTypes.Load;
}

export class LoadFail implements Action {
    readonly type = ClientActionTypes.LoadFail;

    constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
    readonly type = ClientActionTypes.LoadSuccess;

    constructor(public payload: Client[]) { }
}

export type ClientActions =
    Load
    | LoadFail
    | LoadSuccess;
