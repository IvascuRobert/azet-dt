import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopProductDetailsComponent } from './shop-product-details/shop-product-details.component';
import { ShopProductsFilterComponent } from './shop-products-filter/shop-products-filter.component';
import { ShopProductsRoutingModule } from './shop-products-routing.module';
import { ShopProductsSortComponent } from './shop-products-sort/shop-products-sort.component';
import { ShopProductsViewComponent } from './shop-products-view/shop-products-view.component';

@NgModule({
  imports: [
    ShopProductsRoutingModule,
    SharedModule
  ],
  declarations: [
    ShopProductsFilterComponent,
    ShopProductsSortComponent,
    ShopProductDetailsComponent,
    ShopProductsViewComponent
  ],
  providers: [
  ]
})

export class ShopProductsModule {
}
