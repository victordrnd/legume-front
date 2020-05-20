import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }


  createOrder(obj){
    return this.http.post(`${environment.apiUrl}order/create`, obj);
  }


  updateOrderProducts(order_id, obj){
    return this.http.put(`${environment.apiUrl}order/${order_id}/products`, obj);
  } 
}
