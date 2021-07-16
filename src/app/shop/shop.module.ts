import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';
;

@NgModule({
    imports: [
        ShopRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatRippleModule,
        MatBadgeModule,
        MatDividerModule
    ],
    declarations: [ShopRoutingModule.components]
})

export class ShopModule { }
