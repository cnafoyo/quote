import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThequoteComponent } from './thequote.component';

describe('ThequoteComponent', () => {
  let component: ThequoteComponent;
  let fixture: ComponentFixture<ThequoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThequoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
