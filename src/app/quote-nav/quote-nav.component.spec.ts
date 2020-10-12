import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteNavComponent } from './quote-nav.component';

describe('QuoteNavComponent', () => {
  let component: QuoteNavComponent;
  let fixture: ComponentFixture<QuoteNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
