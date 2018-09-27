import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAccountListComponent } from './billing-account-list.component';

describe('BillingAccountListComponent', () => {
  let component: BillingAccountListComponent;
  let fixture: ComponentFixture<BillingAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
