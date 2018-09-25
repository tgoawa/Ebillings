import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MainBillingProcessorComponent } from './main-billing-processor.component';
import { ICount } from '../model/count';
import { BillingsProcessService } from '../service/billings-process.service';
import { of } from 'rxjs/internal/observable/of';
import { BillingsCountComponent } from './billings-count/billings-count.component';
import { MatCardModule } from '@angular/material';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';


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
});
