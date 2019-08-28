import { Component, OnInit, Input } from '@angular/core';
import { Qualification } from '../../qualification';
import * as fromQualification from '../../state';
import * as qualificationActions from '../../state/qualification.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
    selector: 'app-qualification-container',
    templateUrl: './qualification-container.component.html',
    styleUrls: ['./qualification-container.component.scss']
})
export class QualificationContainerComponent implements OnInit {
    @Input() type = 'All';
    qualifications$: Observable<Qualification[]>;
    error$: Observable<string>;

    constructor(private store: Store<fromQualification.State>) {}

    ngOnInit() {
        this.store.dispatch(new qualificationActions.Load());
        this.qualifications$ = this.store.pipe(select(fromQualification['get' + this.type]));
        this.error$ = this.store.pipe(select(fromQualification.getError));
    }
}
