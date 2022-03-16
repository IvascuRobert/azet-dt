import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopHomeDetailsComponent } from './shop-home-details/shop-home-details.component';
import { ShopHomePopularProductsComponent } from './shop-home-popular-products/shop-home-popular-productscomponent';
import { ShopHomeRoutingModule } from './shop-home-routing.module';
import { ShopHomeSearchComponent } from './shop-home-search/shop-home-search.component';
import { ShopHomeTireBrandsComponent } from './shop-home-tire-brands/shop-home-tire-brands.component';
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
        ShopHomeSearchComponent,
        ShopHomeTireBrandsComponent,
        ShopHomeDetailsComponent]
})

export class ShopHomeModule { }
