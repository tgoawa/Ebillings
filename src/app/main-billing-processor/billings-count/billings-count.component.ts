import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICount } from 'src/app/model/count';

@Component({
  selector: 'app-billings-count',
  templateUrl: './billings-count.component.html',
  styleUrls: ['./billings-count.component.css']
})
export class BillingsCountComponent implements OnInit {
  @Input() billingsCount: ICount;
  @Output() processBillings = new EventEmitter();
  @Output() refreshCount = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onProcessBillings(button) {
    this.processBillings.emit(button);
  }

  onRefresh(button) {
    this.refreshCount.emit(button);
  }
}
