import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopProductDetailsRoutingModule } from './shop-product-details-routing.module';

@NgModule({
    imports: [
        ShopProductDetailsRoutingModule,
        SharedModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonModule,
        MatChipsModule,
        MatDividerModule,
        MatToolbarModule,
        MatTooltipModule,
        MatListModule
    ],
    declarations: [ShopProductDetailsRoutingModule.components]
})
export class ShopProductDetailsModule { }
