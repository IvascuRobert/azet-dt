import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbCarouselModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
        MatDividerModule,
        MatButtonModule,
        MatCardModule,
        MatTooltipModule,
        MatChipsModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule,
        NgbRatingModule,
        NgbCarouselModule,
    ],
    declarations: [HomeRoutingModule.components]
})

export class HomeModule { }
