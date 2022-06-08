import { Component, OnInit } from '@angular/core';
import { DropdownValue } from 'src/app/shared/interface/dropdown-value';

@Component({
  selector: 'app-shop-home-three-tabs',
  templateUrl: './shop-home-three-tabs.component.html',
  styleUrls: ['./shop-home-three-tabs.component.scss']
})
export class ShopHomeThreeTabsComponent implements OnInit {

  tireListByWeather: DropdownValue[] = [
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: ''
    },
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: ''
    },
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: ''
    },
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: ''
    },
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: ''
    },
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: ''
    },
  ];

  tireListByType: DropdownValue[] = [
    {
      label: 'Observe',
      value: 'Observe',
      imageUrl: ''
    },
    {
      label: 'Observe',
      value: 'Observe',
      imageUrl: ''
    },
    {
      label: 'Observe',
      value: 'Observe',
      imageUrl: ''
    },
    {
      label: 'Observe',
      value: 'Observe',
      imageUrl: ''
    },
    {
      label: 'Observe',
      value: 'Observe',
      imageUrl: ''
    },
    {
      label: 'Observe',
      value: 'Observe',
      imageUrl: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
