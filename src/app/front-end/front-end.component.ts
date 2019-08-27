import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss'],
  animations: [routerTransition()]
})
export class FrontEndComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
