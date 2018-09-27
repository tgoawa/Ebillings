import { Component, OnInit, Input } from '@angular/core';
import { IBillingAccount } from '../../model/billingAccount';

@Component({
  selector: 'app-billing-account-processor',
  templateUrl: './billing-account-processor.component.html',
  styleUrls: ['./billing-account-processor.component.css'],
})
export class BillingAccountProcessorComponent implements OnInit {
  @Input() billingList: IBillingAccount[];
  constructor() {}

  ngOnInit() {}
}
