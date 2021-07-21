import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopProductRoutingModule } from './shop-product-routing.module';

@NgModule({
    imports: [
        ShopProductRoutingModule,
        SharedModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonModule,
        MatChipsModule,
        MatDividerModule,
        MatToolbarModule,
    ],
    declarations: [ShopProductRoutingModule.components]
})
export class ShopProductModule { }
