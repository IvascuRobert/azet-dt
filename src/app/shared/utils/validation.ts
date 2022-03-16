import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Patterns } from 'src/app/shared/interface/patterns';


export function customPatternValidator(config: Patterns): ValidatorFn {
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

export function customTimePickerValidatorInterval(): ValidatorFn {
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
