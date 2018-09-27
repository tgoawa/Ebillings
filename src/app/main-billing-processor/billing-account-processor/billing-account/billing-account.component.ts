import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { IBillingAccount } from 'src/app/model/billingAccount';

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingAccountComponent implements OnChanges {
  @Input() BillingAccount: IBillingAccount;
  BillingAccountForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {
    this.BillingAccountForm = this.toFormGroup(this.BillingAccount);
  }

  private toFormGroup(data: IBillingAccount): FormGroup {
    const formGroup = this.fb.group({
      tblDraftBillId: data.tblDraftBillId,
      ClientId: data.ClientId,
      AccountDirector: data.AccountDirector,
      InvoicePDFFile: data.InvoicePDFFile,
      EmailAddressTo: data.EmailAddressTo
    });

    return formGroup;
  }

}
