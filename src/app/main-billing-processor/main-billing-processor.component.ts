import { Component, OnInit } from '@angular/core';
import { ICount } from 'src/app/model/count';
import { BillingsProcessService } from '../service/billings-process.service';

@Component({
  selector: 'app-main-billing-processor',
  templateUrl: './main-billing-processor.component.html',
  styleUrls: ['./main-billing-processor.component.css']
})
export class MainBillingProcessorComponent implements OnInit {
  numberOfBillings: ICount;

  constructor(private billingService: BillingsProcessService) { }

  ngOnInit() {
  }

  getNumberOfBillings() {
    this.billingService.getBillingsCount()
    .subscribe((data: ICount) => {
      if (data) {
        // this.isValidNumberOfBillings(data);
      } else {
        console.error('No return value from getBillingsCount');
        // display error to view
      }
    }, error => {
      console.error(error);
      // display there was a system error
    });
  }

}
