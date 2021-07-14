import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbCarouselModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
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
        MatChipsModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule,
        NgbRatingModule,
        NgbCarouselModule,
    ],
    declarations: [ShopHomeRoutingModule.components]
})

export class HomeModule { }
