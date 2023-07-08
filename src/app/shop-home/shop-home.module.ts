import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopHomePopularProductsComponent } from './shop-home-popular-products/shop-home-popular-productscomponent';
import { ShopHomeRoutingModule } from './shop-home-routing.module';
import { ShopHomeVideoComponent } from './shop-home-video/shop-home-video.component';
import { ShopHomeComponent } from './shop-home.component';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ShopHomeRoutingModule
    ],
    declarations: [
        ShopHomeComponent,
        ShopHomePopularProductsComponent,
        ShopHomeVideoComponent,
    ]
})

export class ShopHomeModule { }
