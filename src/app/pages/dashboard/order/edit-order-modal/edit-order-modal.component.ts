import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/core/schedule.service';

@Component({
  selector: 'app-edit-order-modal',
  templateUrl: './edit-order-modal.component.html',
  styleUrls: ['./edit-order-modal.component.scss']
})
export class EditOrderModalComponent implements OnInit {

  booking;
  availability
  selectedDate;
  selectedTime;
  constructor(private scheduleService : ScheduleService) { }

  async ngOnInit() {
    this.availability = await this.scheduleService.getAvailability().toPromise();
    this.selectedDate = this.booking.schedule.substring(0,10);
    this.selectedTime = this.booking.schedule.substring(11,19);
    console.log(this.selectedTime)
  }


}
