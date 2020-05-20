import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsModalComponent } from './booking-details-modal.component';

describe('BookingDetailsModalComponent', () => {
  let component: BookingDetailsModalComponent;
  let fixture: ComponentFixture<BookingDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
