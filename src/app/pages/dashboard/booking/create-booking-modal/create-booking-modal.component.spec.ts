import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookingModalComponent } from './create-booking-modal.component';

describe('CreateBookingModalComponent', () => {
  let component: CreateBookingModalComponent;
  let fixture: ComponentFixture<CreateBookingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
