import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-back-end',
    templateUrl: './back-end.component.html',
    styleUrls: ['./back-end.component.scss'],
    animations: [routerTransition()]
})
export class BackEndComponent {}
