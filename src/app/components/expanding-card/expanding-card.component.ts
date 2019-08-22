import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expanding-card',
  templateUrl: './expanding-card.component.html',
  styleUrls: ['./expanding-card.component.scss']
})
export class ExpandingCardComponent implements OnInit {
  @Input() title: string;
  @Input() colour: string;

  showAdditional = false;

  constructor() { }

  ngOnInit() {
  }

  toggleAdditional() {
    this.showAdditional = !this.showAdditional;
  }
}
