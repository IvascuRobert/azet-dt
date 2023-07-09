import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopHomePopularProductsComponent } from './shop-home-popular-products/shop-home-popular-productscomponent';
import { ShopHomeRoutingModule } from './shop-home-routing.module';
import { ShopHomeVideoComponent } from './shop-home-video/shop-home-video.component';
import { ShopHomeComponent } from './shop-home.component';
import { ShopHomePromoComponent } from './shop-home-promo/shop-home-promo.component';
import { ShopHomeAdvancedSearchComponent } from './shop-home-advanced-search/shop-home-advanced-search.component';

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
        ShopHomePromoComponent,
        ShopHomeAdvancedSearchComponent,
    ]
})

export class ShopHomeModule { }
