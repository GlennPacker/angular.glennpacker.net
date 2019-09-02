import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, catchError, tap } from 'rxjs/operators';

import { Contact } from './contact';
import { debug } from 'util';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(private http: HttpClient) {}

    sendContact(contact) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Contact>('\\glennpacker.netapicontact', contact, { headers: headers }).pipe(
            tap(data => console.log('message Sent')),
            catchError(this.handleError)
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
