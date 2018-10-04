import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAccountComponent } from './billing-account.component';
import { MatCardModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

describe('BillingAccountComponent', () => {
  let component: BillingAccountComponent;
  let fixture: ComponentFixture<BillingAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatFormFieldModule, ReactiveFormsModule ],
      declarations: [ BillingAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
