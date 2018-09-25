import { Component, OnInit } from '@angular/core';
import { ICount } from 'src/app/model/count';
import { BillingsProcessService } from '../service/billings-process.service';
import { IBillingAccount } from '../model/billingAccount';

@Component({
  selector: 'app-main-billing-processor',
  templateUrl: './main-billing-processor.component.html',
  styleUrls: ['./main-billing-processor.component.css']
})
export class MainBillingProcessorComponent implements OnInit {
  displayCount: ICount;
  listOfBillings: IBillingAccount[];
  countProcessStatus: number;
  billingsProcessStatus: number;
  constructor(private billingsService: BillingsProcessService) { }

  ngOnInit() {
    this.getBillingCount();
  }

  processBillings() {
    this.billingsService.processBillings()
    .subscribe((data: IBillingAccount[]) => {
      if (data) {
        if (data.length > 0) {
          this.listOfBillings = data;
          this.billingsProcessStatus = 2;
        } else {
          this.listOfBillings = data;
          this.billingsProcessStatus = 1;
        }
      } else {
        console.error('No List of accounts returned from service');
        this.listOfBillings = null;
        this.billingsProcessStatus = 3;
      }
    }, error => {
      console.error(error);
      this.listOfBillings = null;
      this.billingsProcessStatus = 4;
    });
  }

  getBillingCount() {
    this.billingsService.getBillingsCount()
    .subscribe((data: ICount) => {
      if (data) {
        this.displayCount = data;
        this.countProcessStatus = 1;
      } else {
        console.error('No Billings Count object returned from service');
        this.displayCount = null;
        this.countProcessStatus = 2;
      }
    }, error => {
      console.error(error);
      this.countProcessStatus = 3;
      this.displayCount = null;
    });
  }
}
