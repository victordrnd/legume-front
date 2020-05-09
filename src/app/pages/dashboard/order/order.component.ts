import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BookingService } from 'src/app/core/booking.service';

@Component({
  selector: 'dashboard-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  booking;
  state;
  constructor(private router : Router,
     private activatedRoute : ActivatedRoute,
     private bookingService : BookingService) { }


  ngOnInit() {
    this.state = this.activatedRoute.paramMap.pipe(map(() => window.history.state))
    this.state.subscribe(async res => {
      if(res.booking){
        this.booking = res.booking
      }else{
        this.booking = await this.bookingService.getById(this.activatedRoute.snapshot.paramMap.get('id')).toPromise();
      }
    });
  }



  updateOrder(item){
    console.log(item);
    if(this.booking["order"] == null){
      this.booking.order = {
        items: [],
        total_price : 0
      }
    }
    this.booking.order.items.push(item);
    this.booking.order.total_price += (item.quantity * item.price);
    console.log(this.booking);
  }
}
