import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as qualificationActions from './qualification.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { QualificationService } from '../qualificationService';
import { Qualification } from '../qualification';

@Injectable()
export class QualificationEffects {
    constructor(private actions: Actions,
        private qualificationService: QualificationService) { }

    @Effect()
    loadQualifications = this.actions.pipe(
        ofType(qualificationActions.QualificationActionTypes.Load),
        mergeMap((action: qualificationActions.Load) => this.qualificationService.getQualifications().pipe(
            map((qualifications: Qualification[]) => new qualificationActions.LoadSuccess(qualifications)))),
        catchError(err => of(new qualificationActions.LoadFail(err)))
    );
}
