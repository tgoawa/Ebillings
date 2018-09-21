import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent (minimal)', () => {
  it('should create header', () => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    });
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
