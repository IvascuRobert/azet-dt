import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EfficiencyToColorPipe } from './pipes/efficiencyToColor.pipe';
import { EfficiencyToValuePipe } from './pipes/efficiencyToValue.pipe';
import { NoiseLevelToColorPipe } from './pipes/noiseLevelToColor.pipe';
import { NoiseLevelToValuePipe } from './pipes/noiseLevelToValue.pipe';
import { SeasonToIconPipe } from './pipes/seasonToIcon.pipe';
import { TrimPipe } from './pipes/trim.pipe';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
        TrimPipe,
        SeasonToIconPipe,
        EfficiencyToValuePipe,
        EfficiencyToColorPipe,
        NoiseLevelToValuePipe,
        NoiseLevelToColorPipe
    ],
    declarations: [
        TrimPipe,
        SeasonToIconPipe,
        EfficiencyToValuePipe,
        EfficiencyToColorPipe,
        NoiseLevelToValuePipe,
        NoiseLevelToColorPipe
    ]
})
export class SharedModule { }
