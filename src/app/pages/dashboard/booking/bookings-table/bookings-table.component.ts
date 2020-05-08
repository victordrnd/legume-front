import { Component, OnInit } from "@angular/core";
import { BookingService } from "../../../../core/booking.service";

@Component({
  selector: "app-bookings-table",
  templateUrl: "./bookings-table.component.html",
  styleUrls: ["./bookings-table.component.scss"],
})
export class BookingsTableComponent implements OnInit {
  constructor(private bookingService: BookingService) {}

  private per_page = 50;
  private page = 1;

  ngOnInit(): void {}

  async getAllBookings() {
    const bookings: any = await this.bookingService
      .getAllBooking(this.per_page, this.page)
      .toPromise();
  }
  async getBookingById(id) {
    const booking: any = await this.bookingService.getById(id).toPromise();
  }
  async getMyBooking() {}
}
