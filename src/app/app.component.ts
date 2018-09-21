import { Component, OnInit } from '@angular/core';
import { BillingsProcessService } from './service/billings-process.service';
import { ICount } from './model/count';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  numberOfBillings: ICount;

  constructor(private billingsProc: BillingsProcessService) { }
  ngOnInit() {
    this.getNumberOfBillings();
  }

  onProcessBillings() {
    this.billingsProc.processBillings();
  }

  getNumberOfBillings() {
    this.billingsProc.getBillingsCount()
    .subscribe((data: ICount) => {
      if (data) {
        this.isValidNumberOfBillings(data);
      } else {
        console.error('No return value from getBillingsCount');
        // display error to view
      }
    }, error => {
      console.error(error);
      // display there was a system error
    });
  }

  private isValidNumberOfBillings(val: ICount) {
    if (isNaN(val.Count)) {
      console.error('Number of billings return value was not a number');
      // display error to view some how
    } else {
      this.numberOfBillings = val;
    }
  }
}
