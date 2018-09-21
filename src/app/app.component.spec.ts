import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent (minimal)', () => {
  it('should create main app', () => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    });
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
