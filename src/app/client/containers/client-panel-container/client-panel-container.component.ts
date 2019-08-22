import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromClient from '../../state';
import * as clientActions from '../../state/client.actions';
import { Observable } from 'rxjs';
import { Client } from '../../client';

@Component({
  selector: 'app-client-panel-container',
  templateUrl: './client-panel-container.component.html',
  styleUrls: ['./client-panel-container.component.scss']
})
export class ClientPanelContainerComponent implements OnInit {
  clients$: Observable<Client[]>;
  error$: Observable<string>;

  constructor(private store: Store<fromClient.State>) { }

  ngOnInit() {
    this.store.dispatch(new clientActions.Load());

    this.clients$ = this.store.pipe(select(fromClient.getClients));
    this.error$ = this.store.pipe(select(fromClient.getError));
  }
}
