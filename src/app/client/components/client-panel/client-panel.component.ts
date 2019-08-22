import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../client';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.scss']
})
export class ClientPanelComponent {
  @Input() clients: Client[];
  @Input() error: string;
}
