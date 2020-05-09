import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  
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
