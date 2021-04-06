import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { PaymentService } from 'src/app/core/payment.service';
import { OrderService } from 'src/app/core/order.service';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'dashboard-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  booking;
  stripe;
  cardElement;
  intent;
  disabled = true;
  checked = false;
  loading = false;

  constructor(private activatedRoute: ActivatedRoute, private _location: Location,
    private paymentService: PaymentService, private orderService: OrderService,
    private router: Router, private modalService: NzModalService,
    private notificationService: NzNotificationService) { }

  ngOnInit(): void {
    const state = this.activatedRoute.paramMap.pipe(map(() => window.history.state))
    state.subscribe(async res => {
      if (res.booking) {
        this.booking = res.booking;
        this.stripe = Stripe(environment.stripePublishableKey);
        const elements = this.stripe.elements();
        this.paymentService.createPaymentIntent().toPromise().then((intent) => {
          this.intent = intent;
          this.cardElement = elements.create('card', { style: style });
          this.cardElement.mount('#stripe-card');
          this.cardElement.addEventListener('change', (res) => {
            this.disabled = res.complete ? false : true;
          });
        });
      } else {
        this._location.back();
        return;
      }
    });
  }



  confirmOrder() {
    this.loading = true;
    this.stripe.confirmCardSetup(this.intent.client_secret, {
      payment_method: { card: this.cardElement }
    }).then(async res => {
      const obj = {
        booking_id : this.booking.id,
        intent : this.intent,
        is_espece : false
      }
      await this.paymentService.confirmPayment(obj).toPromise().then(async res => {
        const book = {
          booking_id: this.booking.id,
          items: this.booking.order.items
        }
        await this.orderService.createOrder(book).toPromise().then(res => {
          this.loading = false;
          this.modalService.success({
            nzTitle: "Félicitations",
            nzContent: "Votre commande a correctement été enregistrée.",
            nzOnOk: () => {
              this.router.navigate(['/dashboard/home']);
            }
          });
        })
          .catch(err => {
            this.loading = false;
            this.notificationService.error("Erreur", "Une erreur est survenue lors du processus de commande, veuillez réessayer plus tard.");
          })
      }).catch(err => {
        this.loading = false;
        this.notificationService.error("Erreur", "Une erreur est survenue lors du processus de paiement, vérifiez vos coordonnées bancaires.");
      });

    });
  }


  async payEspece(){
    const obj = {
      booking_id : this.booking.id,
      intent : this.intent,
      is_espece : true
    }
    await this.paymentService.confirmPayment(obj).toPromise().then(async res => {
      const book = {
        booking_id: this.booking.id,
        items: this.booking.order.items
      }
      await this.orderService.createOrder(book).toPromise().then(res => {
        this.loading = false;
        this.modalService.success({
          nzTitle: "Félicitations",
          nzContent: "Votre commande a correctement été enregistrée.",
          nzOnOk: () => {
            this.router.navigate(['/dashboard/home']);
          }
        });
      })
        .catch(err => {
          this.loading = false;
          this.notificationService.error("Erreur", "Une erreur est survenue lors du processus de commande, veuillez réessayer plus tard.");
        })
    }).catch(err => {
      this.loading = false;
      this.notificationService.error("Erreur", "Une erreur est survenue lors du processus de paiement, vérifiez vos coordonnées bancaires.");
    });
  }



}


export const style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
}