import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromClient from '../../state';
import * as clientActions from '../../state/client.actions';
import { Observable } from 'rxjs';
import { Client } from '../../client';
import { ClientsComponent } from '../../components/clients/clients.component';

@Component({
  selector: 'app-clients-container',
  templateUrl: './clients-container.component.html',
  styleUrls: ['./clients-container.component.scss']
})
export class ClientsContainerComponent implements OnInit {
  clients$: Observable<Client[]>;
  error$: Observable<string>;

  constructor(private store: Store<fromClient.State>) { }

  ngOnInit() {
    this.store.dispatch(new clientActions.Load());

    this.clients$ = this.store.pipe(select(fromClient.getClients));
    this.error$ = this.store.pipe(select(fromClient.getError));
  }
}
