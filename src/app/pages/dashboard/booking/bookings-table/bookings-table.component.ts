import { Component, OnInit } from "@angular/core";
import { NzModalService, NzTableComponent } from "ng-zorro-antd";
import { BookingService } from "../../../../core/booking.service";
import { BookingModalComponent } from "../booking-modal/booking-modal.component";

@Component({
  selector: "dashboard-bookings-table",
  templateUrl: "./bookings-table.component.html",
  styleUrls: ["./bookings-table.component.scss"],
})
export class BookingsTableComponent implements OnInit {
  constructor(
    private bookingService: BookingService,
    private modalService: NzModalService
  ) { }

  private per_page = 50;
  private page = 1;
  bookings: any;

  ngOnInit(): void {
    this.getMyBooking();
  }

  async getMyBooking() {
    this.bookings = await this.bookingService.getMyBookings().toPromise();
  }

  async openBookingModal(booking) {
    this.modalService.create({
      nzComponentParams: {
        booking: booking
      },
      nzContent: BookingModalComponent
    })
  }

  delete(booking) {
    this.modalService.confirm({
      nzTitle: "Voulez vous supprimer cette commande ?",
      nzContent: "Cela aura pour effet de vider la commande ainsi que les produits qu'elle contient.",
      nzOnOk: async () => {
        await this.bookingService.delete(booking.id).toPromise();
        this.bookings = await this.bookingService.getAllBookings().toPromise();
      }
    })
  }

}
