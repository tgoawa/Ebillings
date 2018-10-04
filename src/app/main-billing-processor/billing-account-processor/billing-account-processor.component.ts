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
  restageProcessStatus: number;
  updateEmailProcessStatus: number;

  constructor(private billingsService: BillingsProcessService) {}

  ngOnChanges() {}

  onAccountSelected(account: IBillingAccount) {
    this.selectedAccount = account;
    this.updateEmailProcessStatus = 0;
  }

  restageAccounts() {
    this.restageProcessStatus = 0;
    this.billingsService.restageEbills(this.billingList)
    .subscribe((data: IBillingAccount) => {
      if (data) {
        if (data.ClientId === 0) {
          // success!
          this.restageProcessStatus = 1;
        }
      } else {
        // No object returned error
        this.restageProcessStatus = 2;
      }
    }, error => {
      console.error(error);
      this.restageProcessStatus = 3;
    });
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
    if (responseAccount.ClientId === 0) {
      if (indexOfOriginalAccount > -1) {
        this.billingList.splice(indexOfOriginalAccount, 1);
        this.updateEmailProcessStatus = 1;
      }
    } else {
      // response object was the same as the one sent. Account was not processed. Display message to user
      this.billingList[indexOfOriginalAccount] = responseAccount;
      this.updateEmailProcessStatus = 2;
    }
  }

}
