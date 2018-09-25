import { Component, OnInit, Input } from '@angular/core';
import { IBillingAccount } from '../../model/billingAccount';

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit {
  @Input() listOfBillings: IBillingAccount[];
  BillingAccount: IBillingAccount;
  constructor() { }

  ngOnInit() {
  }

}
