import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopHomeDetailsComponent } from './shop-home-details/shop-home-details.component';
import { ShopHomeRoutingModule } from './shop-home-routing.module';
import { ShopHomeTireBrandsComponent } from './shop-home-tire-brands/shop-home-tire-brands.component';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ShopHomeRoutingModule,
        MatDividerModule,
        MatButtonModule,
        MatCardModule,
        MatTooltipModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    declarations: [ShopHomeRoutingModule.components, ShopHomeTireBrandsComponent, ShopHomeDetailsComponent]
})

export class ShopHomeModule { }
