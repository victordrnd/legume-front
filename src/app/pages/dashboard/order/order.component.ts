import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dashboard-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  booking;
  state;
  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }


  ngOnInit(): void {
    this.state = this.activatedRoute.paramMap.pipe(map(() => window.history.state))
    this.state.subscribe(res => {
      if(res.booking){
        this.booking = res.booking
      }else{
        this.router.navigate(['dashboard']);
      }
    });
  }

}
