import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/booking.service';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { PaymentService } from 'src/app/core/payment.service';

@Component({
  selector: 'dashboard-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {

  constructor(private bookingService: BookingService,
    private modalService: NzModalService,
    private paymentService: PaymentService,
    private notificationService: NzNotificationService) { }
  bookings;
  filter = {
    per_page: 15,
    page: 1
  }

  async ngOnInit() {
    this.bookings = await this.bookingService.getAllBookings(this.filter.per_page, this.filter.page).toPromise();
  }


  payOrderCB(booking) {
    this.modalService.confirm({
      nzTitle: "Confirmer le prélèvement",
      nzContent: `Confirmez vous le prélèvement d'un montant de ${booking.order.total_price} € à partir des coordonnées bancaires de ${booking.user.firstname} ${booking.user.lastname} ?`,
      nzWidth: 500,
      nzOnOk: () => {
        this.paymentService.charge(booking).toPromise().then(async res => {
          this.notificationService.success("Succès", "Le client a correctement été prélevé");
          this.bookings = await this.bookingService.getAllBookings(this.filter.per_page, this.filter.page).toPromise();
        })
          .catch(err => this.notificationService.error("Erreur", "Une erreur est survenue lors du paiement"))
      }
    });
  }



  payCash(booking) {
    this.modalService.confirm({
      nzTitle: "Confirmer le paiement",
      nzContent: `Confirmez vous le paiement de ${booking.order.total_price} € de ${booking.user.firstname} ${booking.user.lastname} ?`,
      nzWidth: 500,
      nzOnOk: () => {
        this.paymentService.charge(booking).toPromise().then(async res => {
          this.notificationService.success("Succès", "La commande a correctement été terminé");
          this.bookings = await this.bookingService.getAllBookings(this.filter.per_page, this.filter.page).toPromise();
        })
          .catch(err => this.notificationService.error("Erreur", "Une erreur est survenue lors du processus de finalisation de commande"))
      }
    });
  }

  async changePage(page){
    this.bookings = await this.bookingService.getAllBookings(this.filter.per_page, page).toPromise();
  }
}
