import { NgModule } from '@angular/core';
import { EntityDataService } from '@ngrx/data';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgrxDataProductsService } from './service/ngrx-data-products.service';
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
    ShopProductsViewComponent,
    ShopProductsFilterComponent,
    ShopProductsSortComponent,
    ShopProductDetailsComponent,
    ShopProductsViewComponent
  ],
  providers: [
  ]
})

export class ShopProductsModule {
  constructor(
    // handle ngrx data methods
    ngrxDataProductsService: NgrxDataProductsService,
    entityDataService: EntityDataService,
  ) {
    entityDataService.registerServices({
      Products: ngrxDataProductsService
    });
  }
}
