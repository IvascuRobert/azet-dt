import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TrimPipe } from './pipes/trim.pipe';
import { ProductCardModule } from './product-card/product-card.module';

@NgModule({
    imports: [
        CommonModule,
        ProductCardModule
    ],
    exports: [
        CommonModule,
        ProductCardModule,
        TrimPipe
    ],
    declarations: [TrimPipe]
})
export class SharedModule { }
