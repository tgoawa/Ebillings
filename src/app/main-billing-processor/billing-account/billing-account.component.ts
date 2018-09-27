import { Component, OnInit, Input } from '@angular/core';
import { IBillingAccount } from '../../model/billingAccount';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit {
  @Input() listOfBillings: IBillingAccount[];
  BillingAccount: IBillingAccount;
  BillingAccountForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
