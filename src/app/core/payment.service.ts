import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http : HttpClient) { }

  createPaymentIntent(){
    return this.http.get(`${environment.apiUrl}payment/create`);
  }



  confirmPayment(booking){
    return this.http.post(`${environment.apiUrl}payment/confirm`, booking);
  }

  charge(booking){
    return this.http.post(`${environment.apiUrl}payment/charge`, booking);
  }

  
}
