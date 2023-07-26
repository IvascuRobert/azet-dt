import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { customPatternValidator } from 'src/app/shared/utils/validation';
import { patterns } from 'src/app/shared/utils/patterns';

@Component({
  selector: 'app-shop-contact',
  templateUrl: './shop-contact.component.html',
  styleUrls: ['./shop-contact.component.scss']
})
export class ShopContactComponent implements OnInit {
  contactForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      customPatternValidator(patterns.onlyCharacters)
    ]),
    phone: new UntypedFormControl('', [
      Validators.required,
      customPatternValidator(patterns.phoneNumber)
    ]),
    message: new UntypedFormControl('', Validators.required),
  });

  get name(): UntypedFormControl {
    return this.contactForm.get('name') as UntypedFormControl;
  }

  get phone(): UntypedFormControl {
    return this.contactForm.get('phone') as UntypedFormControl;
  }

  get message(): UntypedFormControl {
    return this.contactForm.get('message') as UntypedFormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue = this.contactForm.getRawValue();
    console.log(formValue, 'formValue');
  }

}
