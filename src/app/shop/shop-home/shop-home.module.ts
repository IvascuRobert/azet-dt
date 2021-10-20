import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopHomeRoutingModule } from './shop-home-routing.module';

@NgModule({
    imports: [
        SharedModule,
        ShopHomeRoutingModule,
        MatDividerModule,
        MatButtonModule,
        MatCardModule,
        MatTooltipModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule
    ],
    declarations: [ShopHomeRoutingModule.components]
})

export class ShopHomeModule { }
