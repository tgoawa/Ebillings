import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsCountComponent } from './billings-count.component';

describe('BillingsCountComponent', () => {
  let component: BillingsCountComponent;
  let fixture: ComponentFixture<BillingsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
