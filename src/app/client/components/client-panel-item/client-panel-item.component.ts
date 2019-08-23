import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../client';

@Component({
  selector: 'app-client-panel-item',
  templateUrl: './client-panel-item.component.html',
  styleUrls: ['./client-panel-item.component.scss']
})
export class ClientPanelItemComponent {
  @Input() client: Client;

  constructor() { }

}
