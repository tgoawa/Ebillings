import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { BillingAccountProcessorComponent } from './billing-account-processor.component';
import { HttpClientModule } from '@angular/common/http';
import { BillingAccountListComponent } from './billing-account-list/billing-account-list.component';
import { BillingAccountComponent } from './billing-account/billing-account.component';
import { BillingsProcessService } from 'src/app/service/billings-process.service';
import { IBillingAccount } from 'src/app/model/billingAccount';
import { of } from 'rxjs/internal/observable/of';
import { MatCardModule, MatListModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const testAccount: IBillingAccount = {
  tblDraftBillId: 200,
  AccountDirector: 'Bad PDF',
  ClientId: 200,
  InvoicePDFFile: 'Bad PDF',
  EmailAddressTo: 'test@email.com',
  ErrorType: 1,
  BillNumber: 'test bill number',
  InvoiceDate: '09/10/2018'
};

describe('BillingAccountProcessorComponent', () => {
  let component: BillingAccountProcessorComponent;
  let fixture: ComponentFixture<BillingAccountProcessorComponent>;
  let billingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, MatCardModule, MatFormFieldModule,  MatListModule, ReactiveFormsModule ],
      declarations: [ BillingAccountProcessorComponent, BillingAccountListComponent, BillingAccountComponent ],
      providers: [ BillingsProcessService ]
    })
    .compileComponents();
  }));

  beforeEach(inject([BillingsProcessService], service => {
    billingService = service;
    fixture = TestBed.createComponent(BillingAccountProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.billingList = [
      {
        tblDraftBillId: 200,
        AccountDirector: 'Bad PDF',
        ClientId: 200,
        InvoicePDFFile: 'Bad PDF',
        EmailAddressTo: 'test@email.com',
        ErrorType: 1,
        BillNumber: 'test bill number',
        InvoiceDate: '09/10/2018'
      },
      {
        tblDraftBillId: 200,
        AccountDirector: 'Bad PDF',
        ClientId: 300,
        InvoicePDFFile: 'Bad PDF',
        EmailAddressTo: 'test@email.com',
        ErrorType: 1,
        BillNumber: 'test bill number',
        InvoiceDate: '09/10/2018'
      },
      {
        tblDraftBillId: 200,
        AccountDirector: 'Bad PDF',
        ClientId: 400,
        InvoicePDFFile: 'Bad PDF',
        EmailAddressTo: 'test@email.com',
        ErrorType: 1,
        BillNumber: 'test bill number',
        InvoiceDate: '09/10/2018'
      }
    ];
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateBadEmail and updateEmailProcessStatus should equal 1', async(() => {
    const response: IBillingAccount = {
      tblDraftBillId: 0,
      AccountDirector: '',
      ClientId: 0,
      InvoicePDFFile: '',
      EmailAddressTo: '',
      ErrorType: 0,
      BillNumber: '',
      InvoiceDate: ''};

    spyOn(billingService, 'updateBadEmail').and.returnValue(of(response));
    component.updateBadEmail(testAccount);
    fixture.detectChanges();

    expect(component.updateEmailProcessStatus).toEqual(1);
  }));

  it('should call updateBadEmail and updateEmailProcessStatus should equal 2', async(() => {

    spyOn(billingService, 'updateBadEmail').and.returnValue(of(testAccount));
    component.updateBadEmail(testAccount);
    fixture.detectChanges();

    expect(component.updateEmailProcessStatus).toEqual(2);
  }));
});
