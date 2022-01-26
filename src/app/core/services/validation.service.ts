// Original version created by Cory Rylan: https://coryrylan.com/blog/angular-2-form-builder-and-validation-management
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IPatterns } from 'src/app/shared/interfaces.interface';

export class ValidationService {

    static customPatternValidator(config: IPatterns): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let urlRegEx: RegExp = config.regExp;

            if (control.value && !control.value.match(urlRegEx)) {
                return {
                    invalidMsg: config.msg
                };
            } else {
                return null;
            }
        };
    }

    static customTimePickerValidatorInterval(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;

            if (!value) {
                return null;
            }
            if (value.hour < 8) {
                return { customMessage: 'Ne pare rău dar este prea devreme.' };
            }
            if (value.hour > 17) {
                return { customMessage: 'Ne pare rău dar este prea târziu.' };
            }

            return null;
        };
    }
}