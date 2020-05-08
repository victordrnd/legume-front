import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/core/schedule.service';
import { BookingService } from 'src/app/core/booking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private scheduleService : ScheduleService,
    private bookingService : BookingService) { }

  selectedTime;
  selectedDate;
  availability :any;

  myBookings;


  async ngOnInit() {
    this.availability = await this.scheduleService.getAvailability().toPromise();
    this.selectedDate = Object.keys(this.availability)[0];
    this.selectedTime = this.availability[this.selectedDate][0];
    this.myBookings = await this.bookingService.getMyBookings().toPromise();
  }



  dayChange(value : string){
    this.selectedTime = this.availability[value][0]; 
  }
}
