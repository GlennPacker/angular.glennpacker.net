import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})
export class HomeComponent { }
