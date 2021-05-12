import { Pipe, PipeTransform } from '@angular/core';
import { EnumCarCategory } from '../enums.enum';
import memo from 'memo-decorator';

@Pipe({ name: 'carCategoryToIcon' })
export class CarCategoryToIconPipe implements PipeTransform {
    @memo()
    transform(carCategory: string): string {
        if (carCategory === EnumCarCategory.BigTruck) {
            return 'fas fa-sun';
        } else if (carCategory === EnumCarCategory.CUV) {
            return 'fas fa-cloud-sun-rain';
        } else if (carCategory === EnumCarCategory.CamperVAN) {
            return 'fas fa-snowflake';
        } else {
            return 'fas fa-question';
        }
    }
}
