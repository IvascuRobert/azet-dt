import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import memo from 'memo-decorator';

@Pipe({ name: 'formControlErrorInterpretation' })
export class FormControlErrorInterpretationPipe implements PipeTransform {
    @memo()
    transform(error: ValidationErrors | null): string {
        if (error && error.required) {
            return 'Câmpul este obligatoriu.';
        } else if (error && error.email) {
            return 'Email-ul nu este valid.';
        } else if (error && error.minlength) {
            return 'Ați completat ' + error.minlength.actualLength + ' din ' + error.minlength.requiredLength + ' caractere.';
        } else if (error && error.maxlength) {
            return 'Ați depășit numărul de caractere cu ' + error.maxlength.actualLength + ' din ' + error.maxlength.requiredLength + '.';
        } else if (error && error.passwordMismatch) {
            return 'Parolele nu sunt identice.';
        } else if (error && error.invalidMsg) {
            return error.invalidMsg;
        } else {
            return 'Eroare.'
        }
    }
}
