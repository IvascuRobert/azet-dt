import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DropdownValue } from 'src/app/shared/interface/dropdown-value';

@Component({
  selector: 'app-shop-home-popular-products',
  templateUrl: './shop-home-popular-products.component.html',
  styleUrls: ['./shop-home-popular-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHomePopularProductsComponent implements OnInit {

  tireList: DropdownValue[] = [
    {
      label: 'SPORTS CARS',
      value: 'SPORTS CARS',
      imageUrl: '',
      routerLink: ''
    },
    {
      label: 'SUVS',
      value: 'SUVS',
      imageUrl: '',
      routerLink: ''
    },
    {
      label: 'ORIGINAL EQUIPTMENT',
      value: 'ORIGINAL EQUIPTMENT',
      imageUrl: '',
      routerLink: ''
    },
    {
      label: '4X4 VEHICLES',
      value: '4X4 VEHICLES',
      imageUrl: '',
      routerLink: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
