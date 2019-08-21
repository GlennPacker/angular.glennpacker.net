import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromHistory from '../../state';
import * as historyActions from '../../state/history.actions';
import { History } from '..//../history';

@Component({
  selector: 'app-history-container',
  templateUrl: './history-container.component.html',
  styleUrls: ['./history-container.component.scss']
})
export class HistoryContainerComponent implements OnInit {
  histories$: Observable<History[]>;
  error$: Observable<string>;

  constructor(private store: Store<fromHistory.State>) { }

  ngOnInit() {
    this.store.dispatch(new historyActions.Load());

    this.histories$ = this.store.pipe(select(fromHistory.getHistories));
    this.error$ = this.store.pipe(select(fromHistory.getError));
  }
}
