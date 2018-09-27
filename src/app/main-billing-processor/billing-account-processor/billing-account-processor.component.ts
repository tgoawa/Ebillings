import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { IBillingAccount } from '../../model/billingAccount';
import { BillingsProcessService } from '../../service/billings-process.service';

@Component({
  selector: 'app-billing-account-processor',
  templateUrl: './billing-account-processor.component.html',
  styleUrls: ['./billing-account-processor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingAccountProcessorComponent implements OnChanges {
  @Input() billingList: IBillingAccount[];
  selectedAccount: IBillingAccount;
  updateEmailProcessStatus: number;

  constructor(private billingsService: BillingsProcessService) {}

  ngOnChanges() {}

  onAccountSelected(account: IBillingAccount) {
    this.selectedAccount = account;
  }

  updateBadEmail(account: IBillingAccount) {
    this.billingsService.updateBadEmail(account)
    .subscribe((data: IBillingAccount) => {
      if (data) {
      // if data is empty object processes successfully and remove object from list
      this.processUpdateEmailResponse(account, data);
      } else {
        // no object returned from service. This is an error
        console.error('There was no data object returned from UpdateBadEmail() service call.');
        this.updateEmailProcessStatus = 3;
      }
    }, error => {
      console.error(error);
      // an error occured display message to user
      this.updateEmailProcessStatus = 4;
    });
  }

  private processUpdateEmailResponse(originalAccount: IBillingAccount,  responseAccount: IBillingAccount) {
    const indexOfOriginalAccount = this.billingList.findIndex(account => account.tblDraftBillId === originalAccount.tblDraftBillId);
    if (this.isEmpty(responseAccount)) {
      if (indexOfOriginalAccount > 0) {
        this.billingList.splice(indexOfOriginalAccount, 1);
        this.updateEmailProcessStatus = 1;
      }
    } else {
      // response had an object. Account was not processed. Display message to user
      this.billingList[indexOfOriginalAccount] = responseAccount;
      this.updateEmailProcessStatus = 2;
    }
  }

  private isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
}
