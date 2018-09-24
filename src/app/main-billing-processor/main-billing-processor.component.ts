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

  constructor(private billingsService: BillingsProcessService) { }

  ngOnInit() {
    this.getNumberOfBillings();
  }

  getNumberOfBillings() {
    // const processCode = this.getBillingCount();
    // if (processCode === 1) {

    // }
  }

  processBillings() {
    this.billingsService.processBillings()
    .subscribe((data: IBillingAccount[]) => {
      if (data.length === 0) {
        console.log('All billings processed with no issues.');
        // display message to view
      } else {
        // create list of billings with error for view.
      }
    });
  }

  getBillingCount(): number {
    this.billingsService.getBillingsCount()
    .subscribe((data: ICount) => {
      if (data) {
        this.displayCount = data;
        return 1;
      } else {
        console.error('No Billings Count object returned from service');
        return 2;
      }
    }, error => {
      console.error(error);
    });
    return 3;
  }
}
