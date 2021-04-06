import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http : HttpClient) { }

  getAvailability(){
    return this.http.get(`${environment.apiUrl}schedule`).pipe(map((res:any) => res.data))
  }
}
