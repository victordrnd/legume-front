import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-modal',
  templateUrl: './quantity-modal.component.html',
  styleUrls: ['./quantity-modal.component.scss']
})
export class QuantityModalComponent implements OnInit {

  constructor() { }

  item;

  ngOnInit(): void {
    this.item.quantity = 1
  }

}
