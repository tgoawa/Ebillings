import { Component, OnInit, Input } from '@angular/core';
import { IBillingAccount } from 'src/app/model/billingAccount';

@Component({
  selector: 'app-billing-account-list',
  templateUrl: './billing-account-list.component.html',
  styleUrls: ['./billing-account-list.component.css']
})
export class BillingAccountListComponent implements OnInit {
  @Input() listOfBillings: IBillingAccount[];
  constructor() { }

  ngOnInit() {
  }

}
