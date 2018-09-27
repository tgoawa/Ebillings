import { Component, OnInit, Input } from '@angular/core';
import { IBillingAccount } from '../../model/billingAccount';
import { BillingsProcessService } from '../../service/billings-process.service';

@Component({
  selector: 'app-billing-account-processor',
  templateUrl: './billing-account-processor.component.html',
  styleUrls: ['./billing-account-processor.component.css'],
})
export class BillingAccountProcessorComponent implements OnInit {
  @Input() billingList: IBillingAccount[];
  constructor(private billingsService: BillingsProcessService) {}

  ngOnInit() {}

  updateBadEmail(account: IBillingAccount) {
    this.billingsService.updateBadEmail(account)
    .subscribe((data: IBillingAccount) => {
      // if data is empty object processes successfully and remove object from list
    }, error => {
      console.error(error);
    });
  }
}
