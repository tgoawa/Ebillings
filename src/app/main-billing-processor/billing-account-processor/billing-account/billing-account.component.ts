import { Component, OnChanges, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IBillingAccount } from 'src/app/model/billingAccount';

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingAccountComponent implements OnChanges {
  @Input() BillingAccount: IBillingAccount;
  @Output() accountToUpdate = new EventEmitter<IBillingAccount>();
  BillingAccountForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {
    this.BillingAccountForm = this.toFormGroup(this.BillingAccount);
  }

  onSubmit(formValue) {
    this.accountToUpdate.emit(formValue);
  }

  private toFormGroup(data: IBillingAccount): FormGroup {
    const formGroup = this.fb.group({
      tblDraftBillId: data.tblDraftBillId,
      ClientId: [{value: data.ClientId, disabled: true}],
      AccountDirector: [{value: data.AccountDirector, disabled: true}],
      InvoicePDFFile: [{value: data.InvoicePDFFile, disabled: true}],
      EmailAddressTo: [data.EmailAddressTo, Validators.email],
      BillNumber: [{value: data.BillNumber, disabled: true}],
      ErrorType: data.ErrorType
    });

    return formGroup;
  }

}
