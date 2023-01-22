import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, FormGroup } from '@angular/forms';
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

  get width(): UntypedFormControl {
    return this.formGroup.get('width') as UntypedFormControl;
  }

  get height(): UntypedFormControl {
    return this.formGroup.get('height') as UntypedFormControl;
  }

  get diameter(): UntypedFormControl {
    return this.formGroup.get('diameter') as UntypedFormControl;
  }

  get speedIndex(): UntypedFormControl {
    return this.formGroup.get('speedIndex') as UntypedFormControl;
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
      label: 'ORIGINAL',
      value: 'ORIGINAL',
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

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.formGroup.getRawValue(), 'e');
  }
}
