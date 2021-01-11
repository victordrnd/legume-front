import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { OrderService } from 'src/app/core/order.service';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => OrderSummaryComponent),
    multi: true
  }]

})
export class OrderSummaryComponent implements OnInit {

  booking;
  @Input() paymentMode = false;

  constructor(private orderService: OrderService,
    private notificationService: NzNotificationService,
    private router: Router) { }

  ngOnInit(): void {

  }

  async processOrder() {
    const obj = {
      booking_id: this.booking.id,
      items: this.booking.order.items
    }
    if (this.booking.order_id) {
      await this.orderService.updateOrderProducts(this.booking.order_id, obj).toPromise()
        .then(res => {
          this.notificationService.success('Succès', "Votre commande a correctement été modifiée")
          this.router.navigate(['/dashboard/reservations']);
        })
        .catch(err => this.notificationService.error('Erreur', "Une erreur est survenue, réessayez plus tard"))
    } else {
      this.router.navigate(['/dashboard/payment'], { state: { booking: this.booking } });
    }
  }

  delete(item) {
    this.booking.order.total_price -= item.price * item.quantity;
    const index = this.booking.order.items.findIndex(value => (value.id == item.id && value.type == item.type));
    this.booking.order.items.splice(index, 1);
  }


  //Dynamics
  onChange: (_: any) => void = (_: any) => { };
  onTouched: () => void = () => { };
  writeValue(value): void {
    if (value) {
      this.booking = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  get value(): any {
    return this.booking;
  }


}