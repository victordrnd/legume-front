import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  slides = [
    {
      background : "../../../../assets/"
    }
  ]
  ngOnInit(): void {
  }


}
