import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopCartRoutingModule } from './shop-cart-routing.module';

@NgModule({
    imports: [
        ShopCartRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatCardModule,
        MatProgressBarModule,
        MatChipsModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        NgbRatingModule
    ],
    declarations: [
        ShopCartRoutingModule.components
    ]
})

export class CartModule { }
