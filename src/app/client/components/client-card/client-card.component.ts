import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../client';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent {
  @Input() client: Client;
  @Input() index: number;

  constructor() { }

  BackEndTech(client: Client) {
    return this.client.technologies
      .filter(r => r.isBackEnd)
      .map(c => c.text)
      .join(', ');
  }

  colour() {
    const pointer = this.index % 9;
    const mapping = [
      'danger',
      'info',
      'success',
      'info',
      'success',
      'danger',
      'success',
      'danger',
      'info'
    ];
    return mapping[pointer];
  }

  FrontEndTech() {
    return this.client.technologies
      .filter(r => !r.isBackEnd)
      .map(c => c.text)
      .join(', ');
  }

  TestTech() {
    return this.client.testTech.join(', ');
  }

  hasBackEnd() {
    return this.client.technologies.some(r => r.isBackEnd);
  }

  hasFrontEnd() {
    return this.client.technologies.some(r => !r.isBackEnd);
  }
}
