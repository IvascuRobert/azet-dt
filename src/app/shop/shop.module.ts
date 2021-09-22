import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';

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
        MatDividerModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatListModule,
        MatChipsModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgbTimepickerModule
    ],
    declarations: [ShopRoutingModule.components],
    providers: [
        MatDatepickerModule
    ]
})

export class ShopModule { }
