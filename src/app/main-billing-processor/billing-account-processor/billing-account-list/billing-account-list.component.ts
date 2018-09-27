import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBillingAccount } from 'src/app/model/billingAccount';

@Component({
  selector: 'app-billing-account-list',
  templateUrl: './billing-account-list.component.html',
  styleUrls: ['./billing-account-list.component.css']
})
export class BillingAccountListComponent implements OnInit {
  @Input() listOfBillings: IBillingAccount[];
  @Output() selectedAccount = new EventEmitter<IBillingAccount>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(account: IBillingAccount) {
    this.selectedAccount.emit(account);
  }

}
