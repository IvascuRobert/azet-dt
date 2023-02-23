import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
