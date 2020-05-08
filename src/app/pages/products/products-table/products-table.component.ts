import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { ProductsService } from 'src/app/core/products.service';
import { PanierModalComponent } from '../panier-modal/panier-modal.component';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  constructor(private productService : ProductsService,
    private modalService : NzModalService) { }

  products;
  error = false;
   
  async ngOnInit() {
    this.products = await this.productService.getAllProducts().toPromise()
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
}
