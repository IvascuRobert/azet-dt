import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DropdownValue } from 'src/app/shared/interface/dropdown-value';

@Component({
  selector: 'app-shop-home-three-tabs',
  templateUrl: './shop-home-three-tabs.component.html',
  styleUrls: ['./shop-home-three-tabs.component.scss'],
})
export class ShopHomeThreeTabsComponent implements OnInit {
  formGroup = this.formBuilder.group({
    width: '205',
    height: '55',
    diameter: 'R16',
    vehicleType: '',
    season: '',
    speedIndex: '91V',
    manufacturer: '',
  });

  get width(): FormControl {
    return this.formGroup.get('width') as FormControl;
  }

  get height(): FormControl {
    return this.formGroup.get('height') as FormControl;
  }

  get diameter(): FormControl {
    return this.formGroup.get('diameter') as FormControl;
  }

  get speedIndex(): FormControl {
    return this.formGroup.get('speedIndex') as FormControl;
  }

  tireListByWeather: DropdownValue[] = [
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: '',
      routerLink: '',
    },
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: '',
      routerLink: '',
    },
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: '',
      routerLink: '',
    },
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: '',
      routerLink: '',
    },
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: '',
      routerLink: '',
    },
    {
      label: 'Winter',
      value: 'Winter',
      imageUrl: '',
      routerLink: '',
    },
  ];

  tireListByType: DropdownValue[] = [
    {
      label: 'SPORTS CARS',
      value: 'SPORTS CARS',
      imageUrl: '',
      routerLink: '',
    },
    {
      label: 'SUVS',
      value: 'SUVS',
      imageUrl: '',
      routerLink: '',
    },
    {
      label: 'ORIGINAL EQUIPTMENT',
      value: 'ORIGINAL EQUIPTMENT',
      imageUrl: '',
      routerLink: '',
    },
    {
      label: '4X4 VEHICLES',
      value: '4X4 VEHICLES',
      imageUrl: '',
      routerLink: '',
    },
    {
      label: 'TRACK CARS',
      value: 'TRACK CARS',
      imageUrl: '',
      routerLink: '',
    },
    {
      label: 'VANS',
      value: 'VANS',
      imageUrl: '',
      routerLink: '',
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.formGroup.getRawValue(), 'e');
  }
}
