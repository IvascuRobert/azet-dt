import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/core/services/validation.service';
import { patterns } from 'src/app/shared/patterns';
import { azetDTGoogleMapsLocation } from 'src/app/shared/utils';

@Component({
  selector: 'app-shop-contact',
  templateUrl: './shop-contact.component.html',
  styleUrls: ['./shop-contact.component.scss']
})
export class ShopContactComponent implements OnInit {

  azetDtLocation = azetDTGoogleMapsLocation;
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      ValidationService.customPatternValidator(patterns.onlyCharacters)
    ]),
    phone: new FormControl('', [
      Validators.required,
      ValidationService.customPatternValidator(patterns.phoneNumber)
    ]),
    message: new FormControl('', Validators.required),
  });

  get name(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get phone(): FormControl {
    return this.contactForm.get('phone') as FormControl;
  }

  get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue = this.contactForm.getRawValue();
    console.log(formValue, 'formValue');
  }

}
