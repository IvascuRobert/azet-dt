import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopLoginRoutingModule } from './shop-login-routing.module';

@NgModule({
    imports: [
        ShopLoginRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatCardModule,
        MatTooltipModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatTabsModule,
        MatListModule,
        MatProgressBarModule
    ],
    declarations: [ShopLoginRoutingModule.components]
})

export class LoginModule { }
