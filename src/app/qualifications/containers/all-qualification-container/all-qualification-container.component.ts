import { Component, OnInit } from '@angular/core';
import { Qualification } from '../../qualification';
import * as fromQualification from '../../state';
import * as qualificationActions from '../../state/qualification.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-all-qualification-container',
  templateUrl: './all-qualification-container.component.html',
  styleUrls: ['./all-qualification-container.component.scss']
})
export class AllQualificationContainerComponent implements OnInit {
  qualifications$: Observable<Qualification[]>;
  error$: Observable<string>;

  constructor(private store: Store<fromQualification.State>) { }

  ngOnInit() {
    this.store.dispatch(new qualificationActions.Load());
    this.qualifications$ = this.store.pipe(select(fromQualification.getQualifications));
    this.error$ = this.store.pipe(select(fromQualification.getError));
  }

}
