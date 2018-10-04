import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MainBillingProcessorComponent } from './main-billing-processor.component';
import { ICount } from '../model/count';
import { BillingsProcessService } from '../service/billings-process.service';
import { of } from 'rxjs/internal/observable/of';
import { BillingsCountComponent } from './billings-count/billings-count.component';
import { MatCardModule } from '@angular/material';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { IBillingAccount } from '../model/billingAccount';


describe('MainBillingProcessorComponent', () => {
  let component: MainBillingProcessorComponent;
  let fixture: ComponentFixture<MainBillingProcessorComponent>;
  let billingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, HttpClientModule ],
      declarations: [ MainBillingProcessorComponent, BillingsCountComponent ],
      providers: [ BillingsProcessService ],
    })
    .compileComponents();
  }));

  beforeEach(inject([BillingsProcessService], service => {
    billingService = service;
    fixture = TestBed.createComponent(MainBillingProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getNumberOfBillings and process status should equal 1', async(() => {
    const response: ICount = {Count: '8'};

    spyOn(billingService, 'getBillingsCount').and.returnValue(of(response));
    component.getBillingCount();
    fixture.detectChanges();

    expect(component.countProcessStatus).toEqual(1);
  }));

  it('should call getNumberOfBillings and process status should equal 2', async(() => {
    const response = null;

    spyOn(billingService, 'getBillingsCount').and.returnValue(of(response));
    component.getBillingCount();
    fixture.detectChanges();

    expect(component.countProcessStatus).toEqual(2);
  }));

  it('should call getNumberOfBillings and process status should equal 3', async(() => {

    spyOn(billingService, 'getBillingsCount').and.returnValue(
      throwError(
        new HttpErrorResponse({
          error: {
            message: 'Error processing request',
          },
          status: 500
        })
      )
    );
    component.getBillingCount();
    fixture.detectChanges();

    expect(component.countProcessStatus).toEqual(3);
  }));

  it('should call processBillings and process status should equal 2', async(() => {
    const response: IBillingAccount[] = [{
      tblDraftBillId: 1,
      AccountDirector: 'test1',
      ClientId: 1,
      InvoicePDFFile: 'test pdf file name',
      EmailAddressTo: 'test email address',
      ErrorType: 1,
      BillNumber: '1'
    }];

    spyOn(billingService, 'processBillings').and.returnValue(of(response));
    component.processBillings();
    fixture.detectChanges();

    expect(component.billingsProcessStatus).toEqual(2);
  }));

  it('should call processBillings and process status should equal 1', async(() => {
    const response: IBillingAccount[] = [];

    spyOn(billingService, 'processBillings').and.returnValue(of(response));
    component.processBillings();
    fixture.detectChanges();

    expect(component.billingsProcessStatus).toEqual(1);
  }));

  it('should call processBillings and process status should equal 3', async(() => {
    const response: IBillingAccount[] = null;

    spyOn(billingService, 'processBillings').and.returnValue(of(response));
    component.processBillings();
    fixture.detectChanges();

    expect(component.billingsProcessStatus).toEqual(3);
  }));

  it('should call processBillings and process status should equal 4', async(() => {

    spyOn(billingService, 'processBillings').and.returnValue(
      throwError(
        new HttpErrorResponse({
          error: {
            message: 'Error processing request',
          },
          status: 500
        })
      )
    );
    component.processBillings();
    fixture.detectChanges();

    expect(component.billingsProcessStatus).toEqual(4);
  }));
});
