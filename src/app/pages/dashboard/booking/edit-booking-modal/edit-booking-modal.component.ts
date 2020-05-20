import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/core/schedule.service';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-edit-booking-modal',
  templateUrl: './edit-booking-modal.component.html',
  styleUrls: ['./edit-booking-modal.component.scss']
})
export class EditBookingModalComponent implements OnInit {

  booking;
  availability
  selectedDate;
  selectedTime;
  constructor(private scheduleService : ScheduleService,
    private router : Router,
    private modalService : NzModalService) { }

  async ngOnInit() {
    this.availability = await this.scheduleService.getAvailability().toPromise();
    this.selectedDate = this.booking.schedule.substring(0,10);
    this.selectedTime = this.booking.schedule.substring(11,19);
    console.log(this.selectedTime)
  }


  updateOrder(booking){
    this.modalService.closeAll();
    this.router.navigate([`/dashboard/commander/${booking.id}`], {state : {booking : booking}});
  }

}
