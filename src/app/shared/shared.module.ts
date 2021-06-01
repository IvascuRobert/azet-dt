import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MessageComponent } from './message/message.component';
import { EfficiencyToColorPipe } from './pipes/efficiencyToColor.pipe';
import { EfficiencyToValuePipe } from './pipes/efficiencyToValue.pipe';
import { FormControlErrorInterpretationPipe } from './pipes/formControlErrorInterpretation.pipe';
import { NoiseLevelToColorPipe } from './pipes/noiseLevelToColor.pipe';
import { NoiseLevelToValuePipe } from './pipes/noiseLevelToValue.pipe';
import { SeasonToIconPipe } from './pipes/seasonToIcon.pipe';
import { TrimPipe } from './pipes/trim.pipe';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule
    ],
    exports: [
        CommonModule,
        MessageComponent,
        TrimPipe,
        SeasonToIconPipe,
        EfficiencyToValuePipe,
        EfficiencyToColorPipe,
        NoiseLevelToValuePipe,
        NoiseLevelToColorPipe,
        FormControlErrorInterpretationPipe
    ],
    declarations: [
        MessageComponent,
        TrimPipe,
        SeasonToIconPipe,
        EfficiencyToValuePipe,
        EfficiencyToColorPipe,
        NoiseLevelToValuePipe,
        NoiseLevelToColorPipe,
        FormControlErrorInterpretationPipe
    ]
})
export class SharedModule { }
