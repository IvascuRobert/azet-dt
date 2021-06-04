import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import memo from 'memo-decorator';

@Pipe({ name: 'formControlErrorInterpretation' })
export class FormControlErrorInterpretationPipe implements PipeTransform {
    @memo()
    transform(error: ValidationErrors): string {
        if (error.required) {
            return 'Câmpul este obligatoriu.';
        } else if (error.email) {
            return 'Email-ul nu este valid.';
        } else if (error.minlength) {
            return 'Ați completat ' + error.minlength.actualLength + ' din ' + error.minlength.requiredLength + ' caractere.';
        } else if (error.maxlength) {
            return 'Ați depășit numărul de caractere cu ' + error.maxlength.actualLength + ' din ' + error.maxlength.requiredLength + '.';
        } else if (error.passwordMismatch) {
            return 'Parolele nu sunt identice.';
        } else if (error.invalidMsg) {
            return error.invalidMsg;
        } else {
            return 'Eroare.'
        }
    }
}
