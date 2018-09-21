import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBillingProcessorComponent } from './main-billing-processor.component';

describe('MainBillingProcessorComponent', () => {
  let component: MainBillingProcessorComponent;
  let fixture: ComponentFixture<MainBillingProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBillingProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBillingProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
