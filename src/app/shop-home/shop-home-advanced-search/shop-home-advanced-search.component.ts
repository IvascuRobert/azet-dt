import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shop-home-advanced-search',
  templateUrl: './shop-home-advanced-search.component.html',
  styleUrls: ['./shop-home-advanced-search.component.scss']
})
export class ShopHomeAdvancedSearchComponent {
  formGroup = this.formBuilder.group({
    width: '205',
    height: '55',
    diameter: 'R16',
    vehicleType: '',
    season: '',
    speedIndex: '91V',
    manufacturer: '',
  });

  constructor(private formBuilder: FormBuilder) { }

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

  onSubmit(): void {
    console.log(this.formGroup.getRawValue(), 'e');
  }
}
