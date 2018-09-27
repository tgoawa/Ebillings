import { Component, OnChanges, Input } from '@angular/core';
import { IBillingAccount } from '../../model/billingAccount';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
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
