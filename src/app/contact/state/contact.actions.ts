import { Action } from '@ngrx/store';
import { Contact } from '../contact';

export enum ContactActionTypes {
    Send = '[Contact] Send',
    SendSuccess = '[Contact] Send Success',
    SendFail = '[Contact] Send Fail'
}

export class Send implements Action {
    readonly type = ContactActionTypes.Send;
    constructor(public payload: Contact) {}
}

export class SendFail implements Action {
    readonly type = ContactActionTypes.SendFail;
    constructor(public payload: string) {}
}

export class SendSuccess implements Action {
    readonly type = ContactActionTypes.SendSuccess;
}

export type ContactActions = SendSuccess | SendFail | Send;
