import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
import { EnumEfficiency } from '../enums.enum';

@Pipe({ name: 'efficiencyToColor' })
export class EfficiencyToColorPipe implements PipeTransform {
    @memo()
    transform(efficiency: string): string {
        if (efficiency === EnumEfficiency.A) {
            return 'success';
        } else if (efficiency === EnumEfficiency.B) {
            return 'success';
        } else if (efficiency === EnumEfficiency.C) {
            return 'warning';
        } else if (efficiency === EnumEfficiency.D) {
            return 'warning';
        } else if (efficiency === EnumEfficiency.E) {
            return 'warning';
        } else if (efficiency === EnumEfficiency.F) {
            return 'danger';
        } else if (efficiency === EnumEfficiency.G) {
            return 'danger';
        } else if (efficiency === EnumEfficiency.NONE) {
            return 'secondary';
        } else {
            return 'secondary';
        }
    }
}
