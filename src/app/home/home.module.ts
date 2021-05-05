import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        HomeRoutingModule,
        NgbCarouselModule,
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        SharedModule
    ],
    declarations: [HomeRoutingModule.components]
})
export class HomeModule { }