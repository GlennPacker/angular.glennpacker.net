import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  @Input() clients: Client[];
  @Input() error: string;
}
