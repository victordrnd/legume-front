import { Component, OnInit, Input } from "@angular/core";
import { NzModalService } from 'ng-zorro-antd';
import { PanierModalComponent } from 'src/app/pages/products/panier-modal/panier-modal.component';

@Component({
  selector: "dashboard-booking-modal",
  templateUrl: "./booking-modal.component.html",
  styleUrls: ["./booking-modal.component.scss"],
})
export class BookingModalComponent implements OnInit {
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
