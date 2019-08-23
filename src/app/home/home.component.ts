import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
    slides = [
        { img: 'http://placehold.it/350x150/000000' },
        { img: 'http://placehold.it/350x150/111111' },
        { img: 'http://placehold.it/350x150/333333' },
        { img: 'http://placehold.it/350x150/666666' }
    ];
    slideConfig = {
        'autoplay': true,
        'slidesToShow': 3,
        'slidesToScroll': 3,
    };

    constructor() {

    }

    ngOnInit() { }
}
