import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopHomePopularProductsComponent } from './shop-home-popular-products/shop-home-popular-productscomponent';
import { ShopHomeRoutingModule } from './shop-home-routing.module';
import { ShopHomeThreeTabsComponent } from './shop-home-three-tabs/shop-home-three-tabs.component';
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
        ShopHomeThreeTabsComponent,
        ShopHomeVideoComponent,
    ]
})

export class ShopHomeModule { }
