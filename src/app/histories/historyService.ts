import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, catchError } from 'rxjs/operators';

import { History } from './history';
import { debug } from 'util';

@Injectable({
    providedIn: 'root',
})
export class HistoryService {
    constructor(private http: HttpClient) { }

    getHistories() {
        return this.http.get<History[]>('assets/history.json').pipe(
            map((histories: History[]) => {
                return histories;
            }),
            catchError(err => this.handleError(err))
        );
    }

    private handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned error code ${err.status} ${err.body ? err.body.error : ''}`;
        }
        return throwError(errorMessage);
    }

}
