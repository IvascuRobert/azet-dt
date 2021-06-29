import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbProgressbarModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './message/message.component';
import { EfficiencyToColorPipe } from './pipes/efficiencyToColor.pipe';
import { EfficiencyToValuePipe } from './pipes/efficiencyToValue.pipe';
import { FormControlErrorInterpretationPipe } from './pipes/formControlErrorInterpretation.pipe';
import { NoiseLevelToColorPipe } from './pipes/noiseLevelToColor.pipe';
import { NoiseLevelToValuePipe } from './pipes/noiseLevelToValue.pipe';
import { SeasonToIconPipe } from './pipes/seasonToIcon.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { ProductsCardComponent } from './products-card/products-card.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatTooltipModule,
        MatChipsModule,
        NgbRatingModule,
        NgbProgressbarModule
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
        FormControlErrorInterpretationPipe,
        ProductsCardComponent
    ],
    declarations: [
        MessageComponent,
        TrimPipe,
        SeasonToIconPipe,
        EfficiencyToValuePipe,
        EfficiencyToColorPipe,
        NoiseLevelToValuePipe,
        NoiseLevelToColorPipe,
        FormControlErrorInterpretationPipe,
        ProductsCardComponent
    ]
})
export class SharedModule { }
