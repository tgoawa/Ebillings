import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICount } from 'src/app/model/count';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-billings-count',
  templateUrl: './billings-count.component.html',
  styleUrls: ['./billings-count.component.css']
})
export class BillingsCountComponent implements OnInit {
  @Input() billingsCount: ICount;
  @Output() processBillings = new EventEmitter();
  @Output() refreshCount = new EventEmitter();

  defaultDate: Date;
  invoiceDate = new FormControl(new Date());
  constructor() { }

  ngOnInit() {
    this.invoiceDate.setValue(this.setDefaultDate());
  }

  onProcessBillings() {
    this.processBillings.emit(this.invoiceDate.value);
  }

  onRefresh(button) {
    this.refreshCount.emit(button);
  }

  private setDefaultDate(): Date {
    const date = new Date();
    const months: { [key: number]: number; } = {};

    months[0] = 31;
    months[1] = 28;
    months[2] = 31;
    months[3] = 30;
    months[4] = 31;
    months[5] = 30;
    months[6] = 31;
    months[7] = 31;
    months[8] = 30;
    months[9] = 31;
    months[10] = 30;
    months[11] = 31;

    if (date.getMonth() === 0) {
      date.setFullYear(date.getFullYear() - 1, date.setMonth(11), months[11]);
      return date;
    } else {
      const currentMonth = date.getMonth();
      date.setMonth(currentMonth - 1, months[currentMonth - 1]);
      return date;
    }
  }
}
