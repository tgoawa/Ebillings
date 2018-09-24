import { Component, OnInit } from '@angular/core';
import { DisplayCount, ICount } from 'src/app/model/count';
import { BillingsProcessService } from '../service/billings-process.service';
import { IBillingAccount } from '../model/billingAccount';

@Component({
  selector: 'app-main-billing-processor',
  templateUrl: './main-billing-processor.component.html',
  styleUrls: ['./main-billing-processor.component.css']
})
export class MainBillingProcessorComponent implements OnInit {
  displayCount: DisplayCount;

  constructor(private billingsService: BillingsProcessService) { }

  ngOnInit() {
    this.getNumberOfBillings();
  }

  getNumberOfBillings() {
    this.billingsService.getBillingsCount()
    .subscribe((data: ICount) => {
      if (data) {
        this.displayCount = new DisplayCount(data.Count, 1);
      } else {
        console.error('No Billings Count object returned from service');
        this.displayCount = new DisplayCount(data.Count, 2);
      }
    }, error => {
      console.error(error);
      this.displayCount = new DisplayCount(0, 3);
    });
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

}
