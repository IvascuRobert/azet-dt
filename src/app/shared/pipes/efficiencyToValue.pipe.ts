import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
import { EnumEfficiency } from '../enums.enum';

@Pipe({ name: 'efficiencyToValue' })
export class EfficiencyToValuePipe implements PipeTransform {
    @memo()
    transform(efficiency: string): number {
        if (efficiency === EnumEfficiency.A) {
            return 100;
        } else if (efficiency === EnumEfficiency.B) {
            return 85.7;
        } else if (efficiency === EnumEfficiency.C) {
            return 71.4;
        } else if (efficiency === EnumEfficiency.D) {
            return 57;
        } else if (efficiency === EnumEfficiency.E) {
            return 43;
        } else if (efficiency === EnumEfficiency.F) {
            return 28;
        } else if (efficiency === EnumEfficiency.G) {
            return 14;
        } else if (efficiency === EnumEfficiency.NONE) {
            return 0;
        } else {
            return 0;
        }
    }
}
