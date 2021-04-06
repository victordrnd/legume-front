import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/core/schedule.service';
import { BookingService } from 'src/app/core/booking.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private scheduleService : ScheduleService,
    private bookingService : BookingService,
    private notificationService : NzNotificationService,
    private router: Router) { }


  selectedTime;
  selectedDate;
  availability :any;

  myBookings;


  async ngOnInit() {
    this.availability = await this.scheduleService.getAvailability().toPromise();
    this.selectedDate = Object.keys(this.availability)[0];
    this.myBookings = await this.bookingService.getMyBookings().toPromise();
  }



 


  bookDateTime(){
    const obj = {
      date : this.selectedDate,
      time : this.selectedTime
    }
    this.bookingService.createBooking(obj).toPromise()
      .then(async res => {
        this.notificationService.success("Succès", "La réservation a correctement été enregistrée");
        this.myBookings = await this.bookingService.getMyBookings().toPromise();
      })
      .catch(err => {
        this.notificationService.error("Erreur", err.error.error);
      });
  }


  goToOrder(booking){
    this.router.navigate([`dashboard/commander/${booking.id}`], {state : {booking : booking}});
  }

}
