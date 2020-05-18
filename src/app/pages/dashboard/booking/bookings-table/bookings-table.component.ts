import { Component, OnInit } from "@angular/core";
import { NzModalService, NzTableComponent, NzNotificationService } from "ng-zorro-antd";
import { BookingService } from "../../../../core/booking.service";
import { BookingModalComponent } from "../booking-modal/booking-modal.component";
import { Router } from '@angular/router';
import { EditOrderModalComponent } from '../../order/edit-order-modal/edit-order-modal.component';

@Component({
  selector: "dashboard-bookings-table",
  templateUrl: "./bookings-table.component.html",
  styleUrls: ["./bookings-table.component.scss"],
})
export class BookingsTableComponent implements OnInit {
  constructor(
    private bookingService: BookingService,
    private modalService: NzModalService,
    private router: Router,
    private notificationService: NzNotificationService
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
      nzWidth: 700,
      nzComponentParams: {
        booking: booking
      },
      nzContent: BookingModalComponent
    })
  }


  editOrder(booking) {
    this.modalService.create({
      nzContent: EditOrderModalComponent,
      nzTitle: "Edition de commande",
      nzWidth: 500,
      nzComponentParams: { booking: booking },
      nzOnOk: (res) => {
        console.log(res);
        if (booking.schedule != res.selectedDate + ' ' + res.selectedTime) {
          const obj = { date: res.selectedDate, time: res.selectedTime };
          this.bookingService.updateSchedule(booking.id, obj).toPromise()
            .then(async res => {
              this.notificationService.success('Succès', "Votre commande a correctement été mise à jour");
              this.bookings = await this.bookingService.getMyBookings().toPromise();
            })
            .catch(err => this.notificationService.error('Erreur', "Une erreur est survenue, réessayez plus tard"))
        }
      }
    })
  }

  delete(booking) {
    this.modalService.confirm({
      nzTitle: "Voulez vous annuler cette commande ?",
      nzContent: "Cette action est irréversible, le créneau horraire sera de nouveau accessible aux autres utilisateurs",
      nzOnOk: async () => {
        await this.bookingService.delete(booking.id).toPromise();
        this.bookings = await this.bookingService.getMyBookings().toPromise();
      }
    })
  }

  goToOrder(booking) {
    this.router.navigate([`dashboard/commander/${booking.id}`], { state: { booking: booking } });
  }
}
