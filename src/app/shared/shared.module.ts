import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarCategoryToIconPipe } from './pipes/carCategoryToIcon.pipe';
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
        CarCategoryToIconPipe
    ],
    declarations: [
        TrimPipe,
        SeasonToIconPipe,
        CarCategoryToIconPipe
    ]
})
export class SharedModule { }
