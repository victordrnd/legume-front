import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getAllProducts(schedule : any = false){
    const obj = schedule ? {date : schedule.substring(0,10)} : {}; 
    return this.http.post(`${environment.apiUrl}products`, obj);
  }
}
 