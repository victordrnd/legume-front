import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-panier-modal',
  templateUrl: './panier-modal.component.html',
  styleUrls: ['./panier-modal.component.scss']
})
export class PanierModalComponent implements OnInit {

  constructor() { }
  @Input() panier;
  ngOnInit(): void {
  }

}
