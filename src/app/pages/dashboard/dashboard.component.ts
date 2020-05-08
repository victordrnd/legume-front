import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/core/schedule.service';
import { BookingService } from 'src/app/core/booking.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  async ngOnInit() {

  }



}
