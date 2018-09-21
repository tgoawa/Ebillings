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
  countErrorMessage: string;
  constructor(private billingService: BillingsProcessService) { }

  ngOnInit() {
    this.getNumberOfBillings();
  }

  getNumberOfBillings() {
    this.billingService.getBillingsCount()
    .subscribe((data: ICount) => {
      if (data) {
        this.numberOfBillings = data;
      } else {
        console.error('No Billings Count object returned from service');
        this.countErrorMessage = 'There was a problem retrieving the number of billings needed to process';
      }
    }, error => {
      console.error(error);
      this.countErrorMessage = 'There was an error making the http request for count data';
    });
  }

  onProcessBillings() {
    this.billingService.processBillings();
  }

}
