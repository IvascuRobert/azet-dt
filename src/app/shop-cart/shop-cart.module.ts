import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopCartRoutingModule } from './shop-cart-routing.module';
import { ShopCartComponent } from './shop-cart.component';

@NgModule({
    imports: [
        ShopCartRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        ShopCartComponent
    ]
})

export class ShopCartModule { }
