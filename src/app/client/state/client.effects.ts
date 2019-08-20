import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as clientActions from './client.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ClientService } from '../clientService';
import { Client } from '../client';

@Injectable()
export class ClientEffects {
    constructor(private actions: Actions,
        private clientService: ClientService) { }

    @Effect()
    loadClients = this.actions.pipe(
        ofType(clientActions.ClientActionTypes.Load),
        mergeMap((action: clientActions.Load) => this.clientService.getClients().pipe(
            map((clients: Client[]) => new clientActions.LoadSuccess(clients)))),
        catchError(err => of(new clientActions.LoadFail(err)))
    );
}
