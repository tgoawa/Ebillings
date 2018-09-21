import { Component, OnInit, Input } from '@angular/core';
import { ICount } from 'src/app/model/count';

@Component({
  selector: 'app-billings-count',
  templateUrl: './billings-count.component.html',
  styleUrls: ['./billings-count.component.css']
})
export class BillingsCountComponent implements OnInit {
  @Input() billingsCount: ICount;
  constructor() { }

  ngOnInit() {
  }

}
