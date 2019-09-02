import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as contactActions from './contact.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ContactService } from '../contactService';
import { Contact } from '../contact';

@Injectable()
export class ContactEffects {
    constructor(private actions: Actions, private contactService: ContactService) {}

    @Effect()
    sendContact = this.actions.pipe(
        ofType(contactActions.ContactActionTypes.Send),
        map((action: contactActions.Send) => action.payload),
        mergeMap((contact: Contact) => this.contactService.sendContact(contact).pipe(map(() => new contactActions.SendSuccess()))),
        catchError(err => of(new contactActions.SendFail(err)))
    );
}
