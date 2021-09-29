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
}