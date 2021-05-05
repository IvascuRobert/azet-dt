import { Pipe, PipeTransform } from '@angular/core';
import { EnumSeason } from '../enums.enum';
import memo from 'memo-decorator';

@Pipe({ name: 'seasonToIcon' })
export class SeasonToIconPipe implements PipeTransform {
    @memo()
    transform(season: string): string {
        if (season === EnumSeason.Summer) {
            return 'fas fa-sun';
        } else if (season === EnumSeason.AllSeason) {
            return 'fas fa-cloud-sun-rain';
        } else if (season === EnumSeason.Winter) {
            return 'fas fa-snowflake';
        } else {
            return 'fas fa-question';
        }
    }
}
