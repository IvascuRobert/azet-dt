import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
    imports: [
        CartRoutingModule,
        SharedModule,
        MatTabsModule,
        MatDividerModule,
        MatIconModule,
        MatCardModule,
        MatProgressBarModule,
        MatChipsModule,
        MatButtonModule,
        NgbRatingModule
    ],
    declarations: [
        CartRoutingModule.components
    ]
})

export class CartModule { }
