import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MainBillingProcessorComponent } from './main-billing-processor.component';
import { ICount } from '../model/count';
import { BillingsProcessService } from '../service/billings-process.service';
import { of } from 'rxjs/internal/observable/of';
import { BillingsCountComponent } from './billings-count/billings-count.component';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

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

  it('should call getNumberOfBillings and return an object that contains the amount of billings waiting for process', async(() => {
    const response: ICount = {Count: '8'};

    spyOn(billingService, 'getBillingsCount').and.returnValue(of(response));
    component.getBillingCount();
    fixture.detectChanges();

    expect(component.displayCount).toEqual(response);
  }));
});
