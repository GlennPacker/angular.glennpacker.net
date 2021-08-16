import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expanding-card',
  templateUrl: './expanding-card.component.html',
  styleUrls: ['./expanding-card.component.scss'],
})
export class ExpandingCardComponent {
  @Input() title: string;
  @Input() colour: string;
  @Input() minHeight = 122;
  showAdditional = false;

  toggleAdditional() {
    this.showAdditional = !this.showAdditional;
  }
}
