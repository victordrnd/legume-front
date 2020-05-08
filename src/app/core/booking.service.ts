import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BehaviorSubject, throwError, Observable } from "rxjs";
import { distinctUntilChanged, map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  constructor(private http: HttpClient) {}

  getAllBooking(per_page = 15, page = 1): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/booking/all?per_page=${per_page}&page=${page}`
    );
  }

  getById(id) {
    return this.http.get(`${environment.apiUrl}/booking/${id}`);
  }


  getMyBookings(){
    return this.http.get(`${environment.apiUrl}booking/my`)
  }

  createBooking(obj){
    return this.http.post(`${environment.apiUrl}booking/book`, obj);
  }
}
