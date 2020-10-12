import { ComponentFixture, TestBed } from '@angular/core/testing';

import { quoteformComponent } from './quoteform.component';

describe('QuoteformComponent', () => {
  let component: quoteformComponent;
  let fixture: ComponentFixture<quoteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [quoteformComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(quoteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
