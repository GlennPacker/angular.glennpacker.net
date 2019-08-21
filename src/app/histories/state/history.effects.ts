import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as historyActions from './history.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HistoryService } from '../historyService';
import { History } from '../history';

@Injectable()
export class HistoryEffects {
    constructor(private actions: Actions,
        private historyService: HistoryService) { }

    @Effect()
    loadHistorys = this.actions.pipe(
        ofType(historyActions.HistoryActionTypes.Load),
        mergeMap((action: historyActions.Load) => this.historyService.getHistories().pipe(
            map((historys: History[]) => new historyActions.LoadSuccess(historys)))),
        catchError(err => of(new historyActions.LoadFail(err)))
    );
}
