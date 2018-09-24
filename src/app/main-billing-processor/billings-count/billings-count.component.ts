import { Component, OnInit, Input, Output } from '@angular/core';
import { DisplayCount } from 'src/app/model/count';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-billings-count',
  templateUrl: './billings-count.component.html',
  styleUrls: ['./billings-count.component.css']
})
export class BillingsCountComponent implements OnInit {
  @Input() billingsCount: DisplayCount;
  @Output() processBillings = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onProcessBillings(button) {
    this.processBillings.emit(button);
  }
}
