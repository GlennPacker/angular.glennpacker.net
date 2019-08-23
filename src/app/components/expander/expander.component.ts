import { Component } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent {
  showAdditional = false;

  toggleAdditional() {
    this.showAdditional = !this.showAdditional;
  }
}
