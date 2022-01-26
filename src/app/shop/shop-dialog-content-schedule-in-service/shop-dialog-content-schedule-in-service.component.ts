import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/core/services/validation.service';
import { patterns } from 'src/app/shared/patterns';

@Component({
  selector: 'app-shop-dialog-content-schedule-in-service',
  templateUrl: './shop-dialog-content-schedule-in-service.component.html',
  styleUrls: ['./shop-dialog-content-schedule-in-service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopDialogContentScheduleInServiceComponent implements OnInit {

  minDate: Date = new Date();
  maxDate: Date = new Date();

  scheduleInServiceForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      ValidationService.customPatternValidator(patterns.onlyCharacters)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      ValidationService.customPatternValidator(patterns.phoneNumber)
    ]),
    reason: new FormControl('', Validators.required),
    date: new FormControl(null, Validators.required),
    time: new FormControl(null, [
      Validators.required,
      ValidationService.customTimePickerValidatorInterval()
    ])
  });

  get controlName(): FormControl {
    return this.scheduleInServiceForm.get('name') as FormControl;
  }

  get controlEmail(): FormControl {
    return this.scheduleInServiceForm.get('email') as FormControl;
  }

  get controlPhone(): FormControl {
    return this.scheduleInServiceForm.get('phone') as FormControl;
  }

  get controlDate(): FormControl {
    return this.scheduleInServiceForm.get('date') as FormControl;
  }

  get controlTime(): FormControl {
    return this.scheduleInServiceForm.get('time') as FormControl;
  }

  get controlReason(): FormControl {
    return this.scheduleInServiceForm.get('reason') as FormControl;
  }

  filterDate = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor() { }

  ngOnInit(): void {
    // set minDate
    this.minDate.setDate(this.minDate.getDate() + 1);

    // set maxDate
    this.maxDate.setDate(this.minDate.getDate() + 21);
    this.controlDate.setValue(this.minDate);
  }

  onSubmitScheduleInServiceForm(): void {
    const scheduleInServiceFormValues = this.scheduleInServiceForm.getRawValue();

    console.log(scheduleInServiceFormValues, 'scheduleInServiceFormValues');
  }
}
