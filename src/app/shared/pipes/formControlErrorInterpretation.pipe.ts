import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import memo from 'memo-decorator';

@Pipe({ name: 'formControlErrorInterpretation' })
export class FormControlErrorInterpretationPipe implements PipeTransform {
    @memo()
    transform(error: ValidationErrors): string {
        if (error.required) {
            return 'Câmpul este obligatoriu';
        } else if (error.minlength) {
            return 'Ați completat ' + error.minlength.actualLenght + ' din ' + error.minlength.requiredLength;
        } else if (error.miss) {
            return 'Câmpul este obligatoriu';
        }

    }
}
