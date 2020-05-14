import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-booking-modal",
  templateUrl: "./booking-modal.component.html",
  styleUrls: ["./booking-modal.component.scss"],
})
export class BookingModalComponent implements OnInit {
  constructor() { }
  @Input() booking;
  ngOnInit(): void {
    console.log(this.booking);
  }
}
