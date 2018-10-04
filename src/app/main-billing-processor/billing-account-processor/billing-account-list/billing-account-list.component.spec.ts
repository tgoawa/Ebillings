import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAccountListComponent } from './billing-account-list.component';
import { MatCardModule, MatListModule } from '@angular/material';

describe('BillingAccountListComponent', () => {
  let component: BillingAccountListComponent;
  let fixture: ComponentFixture<BillingAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatListModule ],
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
