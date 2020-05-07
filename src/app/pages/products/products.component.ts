import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';
import { NzModalService } from 'ng-zorro-antd';
import { PanierModalComponent } from './panier-modal/panier-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductsService,
    private modalService : NzModalService) { }

  products;
  async ngOnInit() {
    this.products = await this.productService.getAllProducts().toPromise();
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
