import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAccountProcessorComponent } from './billing-account-processor.component';

describe('BillingAccountProcessorComponent', () => {
  let component: BillingAccountProcessorComponent;
  let fixture: ComponentFixture<BillingAccountProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAccountProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAccountProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
