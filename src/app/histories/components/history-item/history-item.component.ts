import { Component, OnInit, Input } from '@angular/core';
import { History } from '../../history';
@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent {
  @Input() history: History;
  showDetail = false;

  toggleDetail() {
    this.showDetail = !this.showDetail;
  }

}
