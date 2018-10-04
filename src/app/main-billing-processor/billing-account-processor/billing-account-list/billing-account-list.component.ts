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
  @Output() stageAccounts = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(account: IBillingAccount) {
    this.selectedAccount.emit(account);
  }

  onStageAccounts(button) {
    this.stageAccounts.emit(button);
  }

}
