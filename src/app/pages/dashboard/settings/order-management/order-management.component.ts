import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/booking.service';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { PaymentService } from 'src/app/core/payment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'dashboard-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {

  constructor(private bookingService: BookingService,
    private modalService: NzModalService,
    private paymentService: PaymentService,
    private notificationService: NzNotificationService,
    private currencyPipe : CurrencyPipe) { }
  bookings;
  filter = {
    per_page: 15,
    page: 1
  }

  async ngOnInit() {
    this.bookings = await this.bookingService.getAllBookings(this.filter.per_page, this.filter.page).toPromise();
  }


  payOrderCB(booking, i) {
    
    const money = this.currencyPipe.transform(booking.order.total_price, 'EUR');
    this.modalService.confirm({
      nzTitle: "Confirmer le prélèvement",
      nzContent: `Confirmez vous le prélèvement d'un montant de ${money} à partir des coordonnées bancaires de ${booking.user.firstname} ${booking.user.lastname} ?`,
      nzWidth: 500,
      nzOnOk: () => {
        this.bookings.data[i].loading = true;
        this.paymentService.charge(booking).toPromise().then(async res => {
          this.notificationService.success("Succès", "Le client a correctement été prélevé");
          this.bookings = await this.bookingService.getAllBookings(this.filter.per_page, this.filter.page).toPromise();
        })
        .catch(err => {
          this.notificationService.error("Erreur", "Une erreur est survenue lors du paiement")
          this.bookings[i].loading = true;
          })
      }
    });
  }



  payCash(booking) {
    const money = this.currencyPipe.transform(booking.order.total_price, 'EUR');
    this.modalService.confirm({
      nzTitle: "Confirmer le paiement",
      nzContent: `Confirmez vous le paiement de ${money} de ${booking.user.firstname} ${booking.user.lastname} ?`,
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
