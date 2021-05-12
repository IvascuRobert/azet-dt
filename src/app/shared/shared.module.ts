import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SeasonToIconPipe } from './pipes/seasonToIcon.pipe';
import { TrimPipe } from './pipes/trim.pipe';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
        TrimPipe,
        SeasonToIconPipe
    ],
    declarations: [
        TrimPipe,
        SeasonToIconPipe
    ]
})
export class SharedModule { }
