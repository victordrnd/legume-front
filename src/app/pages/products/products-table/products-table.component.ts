import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NzModalService, NzTableComponent } from 'ng-zorro-antd';
import { ProductsService } from 'src/app/core/products.service';
import { PanierModalComponent } from '../panier-modal/panier-modal.component';
import { QuantityModalComponent } from '../../dashboard/order/quantity-modal/quantity-modal.component';


@Component({
  selector: 'page-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  constructor(private productService : ProductsService,
    private modalService : NzModalService) { }

  @Input() orderMode : boolean;
  @Input() booking = {
    schedule : false
  };

  @Output() change = new EventEmitter();
  products;
  error = false;
  mobile;
  async ngOnInit() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)){
      this.mobile = true;
    }
    this.products = await this.productService.getAllProducts(this.booking.schedule).toPromise()
      .catch(err => {
        this.error = err.error.error;
      });
  }

  openPanierModal(panier){
    this.modalService.create({
      nzComponentParams : {
        panier : panier
      },
      nzContent : PanierModalComponent
    })
  }


  openQuantityModal(item){
    this.modalService.create({
      nzContent : QuantityModalComponent,
      nzComponentParams : {
        item : item
      },
      nzOnOk : (event) => {
        this.change.emit(event.item);
      }
    })
  }

}