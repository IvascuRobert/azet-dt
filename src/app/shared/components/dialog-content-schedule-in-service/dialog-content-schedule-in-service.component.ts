import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { customPatternValidator, customTimePickerValidatorInterval } from 'src/app/shared/utils/validation';
import { patterns } from '../../utils/patterns';

@Component({
  selector: 'app-dialog-content-schedule-in-service',
  templateUrl: './dialog-content-schedule-in-service.component.html',
  styleUrls: ['./dialog-content-schedule-in-service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogContentScheduleInServiceComponent implements OnInit {

  minDate: Date = new Date();
  maxDate: Date = new Date();

  scheduleInServiceForm: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      customPatternValidator(patterns.onlyCharacters)
    ]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    phone: new UntypedFormControl('', [
      Validators.required,
      customPatternValidator(patterns.phoneNumber)
    ]),
    reason: new UntypedFormControl('', Validators.required),
    date: new UntypedFormControl(null, Validators.required),
    time: new UntypedFormControl(null, [
      Validators.required,
      customTimePickerValidatorInterval()
    ])
  });

  get controlName(): UntypedFormControl {
    return this.scheduleInServiceForm.get('name') as UntypedFormControl;
  }

  get controlEmail(): UntypedFormControl {
    return this.scheduleInServiceForm.get('email') as UntypedFormControl;
  }

  get controlPhone(): UntypedFormControl {
    return this.scheduleInServiceForm.get('phone') as UntypedFormControl;
  }

  get controlDate(): UntypedFormControl {
    return this.scheduleInServiceForm.get('date') as UntypedFormControl;
  }

  get controlTime(): UntypedFormControl {
    return this.scheduleInServiceForm.get('time') as UntypedFormControl;
  }

  get controlReason(): UntypedFormControl {
    return this.scheduleInServiceForm.get('reason') as UntypedFormControl;
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
