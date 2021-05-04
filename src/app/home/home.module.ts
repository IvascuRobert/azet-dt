import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [HomeRoutingModule, NgbCarouselModule, CommonModule, MatCardModule, MatIconModule, MatTabsModule],
    declarations: [HomeRoutingModule.components]
})
export class HomeModule { }