import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-spa',
    templateUrl: './spa.component.html',
    styleUrls: ['./spa.component.scss'],
    animations: [routerTransition()]
})
export class SpaComponent {}
