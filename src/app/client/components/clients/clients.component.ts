import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  @Input() clients: Client[];
  @Input() error: string;

  constructor() { }

  ngOnInit() {
  }

}
