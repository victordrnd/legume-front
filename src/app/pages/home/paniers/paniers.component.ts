import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'page-paniers',
  templateUrl: './paniers.component.html',
  styleUrls: ['./paniers.component.scss']
})
export class PaniersComponent implements OnInit {

  constructor(private productService : ProductsService) { }
  paniers
  async ngOnInit(){
    this.paniers = await this.productService.getAllProducts().toPromise()
  }

}
