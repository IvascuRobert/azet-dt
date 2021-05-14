import { Pipe, PipeTransform } from '@angular/core';
import { EnumTireCategory } from '../enums.enum';
import memo from 'memo-decorator';

@Pipe({ name: 'seasonToIcon' })
export class SeasonToIconPipe implements PipeTransform {
    @memo()
    transform(season: string): string {
        if (season === EnumTireCategory.Summer) {
            return 'fas fa-sun';
        } else if (season === EnumTireCategory.AllSeason) {
            return 'fas fa-cloud-sun-rain';
        } else if (season === EnumTireCategory.Winter) {
            return 'fas fa-snowflake';
        } else {
            return 'fas fa-question';
        }
    }
}
