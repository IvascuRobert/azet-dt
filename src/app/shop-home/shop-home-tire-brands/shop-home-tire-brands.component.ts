import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shop-home-tire-brands',
  templateUrl: './shop-home-tire-brands.component.html',
  styleUrls: ['./shop-home-tire-brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHomeTireBrandsComponent implements OnInit {

  tireBrands = [
    {
      name: 'Continental',
      imgSrc: ''
    },
    {
      name: 'Continental',
      imgSrc: ''
    },
    {
      name: 'Continental',
      imgSrc: ''
    },
    {
      name: 'Continental',
      imgSrc: ''
    },
    {
      name: 'Continental',
      imgSrc: ''
    },
    {
      name: 'Continental',
      imgSrc: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
