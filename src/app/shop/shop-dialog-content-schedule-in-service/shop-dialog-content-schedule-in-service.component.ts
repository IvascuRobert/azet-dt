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
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      ValidationService.customPatternValidator(patterns.onlyCharacters)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      ValidationService.customPatternValidator(patterns.onlyCharacters)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    date: new FormControl(new Date, Validators.required),
    time: new FormControl(null, Validators.required)
  });

  get controlFirstName(): FormControl {
    return this.scheduleInServiceForm.get('firstName') as FormControl;
  }

  get controlLastName(): FormControl {
    return this.scheduleInServiceForm.get('lastName') as FormControl;
  }

  get controlEmail(): FormControl {
    return this.scheduleInServiceForm.get('email') as FormControl;
  }

  get controlDate(): FormControl {
    return this.scheduleInServiceForm.get('date') as FormControl;
  }

  get controlTime(): FormControl {
    return this.scheduleInServiceForm.get('time') as FormControl;
  }

  filterDate = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor() { }

  ngOnInit(): void {
    // set maxDate
    this.maxDate.setDate(this.minDate.getDate() + 21);
  }

  onSubmitScheduleInServiceForm(): void {
    const scheduleInServiceFormValues = this.scheduleInServiceForm.getRawValue();

    console.log(scheduleInServiceFormValues, 'scheduleInServiceFormValues');
  }

  updateDateTimeValue(date: Date): void {
    this.controlDate.setValue(date);
  }

}
