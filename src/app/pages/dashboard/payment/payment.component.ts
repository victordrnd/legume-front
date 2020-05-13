import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { PaymentService } from 'src/app/core/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  booking;
  stripe;
  cardElement;
  intent;
  disabled;
  checked = false;

  constructor(private activatedRoute: ActivatedRoute, private _location: Location,
    private paymentService: PaymentService) { }

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



  confirmOrder(){
    
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