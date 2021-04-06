import { Component, OnInit, Input } from "@angular/core";
import { NzModalService } from 'ng-zorro-antd';
import { PanierModalComponent } from 'src/app/pages/products/panier-modal/panier-modal.component';

@Component({
  selector: "dashboard-booking-details-modal",
  templateUrl: "./booking-details-modal.component.html",
  styleUrls: ["./booking-details-modal.component.scss"],
})
export class BookingDetailsModalComponent implements OnInit {
  constructor(private modalService : NzModalService) { }
  @Input() booking;


  ngOnInit(): void {

  }

  openPanierModal(panier){
    this.modalService.create({
      nzContent : PanierModalComponent,
      nzComponentParams : {panier : panier}
    })
  }
}
