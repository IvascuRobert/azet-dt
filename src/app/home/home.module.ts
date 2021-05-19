import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbCarouselModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
        NgbCarouselModule,
        MatDividerModule,
        MatButtonModule,
        MatCardModule,
        MatTooltipModule,
        MatChipsModule,
        NgbRatingModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule
    ],
    declarations: [HomeRoutingModule.components]
})

export class HomeModule { }
