import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "dashboard-booking-modal",
  templateUrl: "./booking-modal.component.html",
  styleUrls: ["./booking-modal.component.scss"],
})
export class BookingModalComponent implements OnInit {
  constructor() {}
  @Input() booking;
  ngOnInit(): void {}
}
