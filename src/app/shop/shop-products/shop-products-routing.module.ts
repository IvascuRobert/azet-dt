import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductsFilterComponent } from './shop-products-filter/shop-products-filter.component';
import { ShopProductsSortComponent } from './shop-products-sort/shop-products-sort.component';
import { ShopProductsComponent } from './shop-products.component';

const routes: Routes = [
    { path: '', component: ShopProductsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShopProductsRoutingModule {
    static components = [
        ShopProductsComponent,
        ShopProductsFilterComponent,
        ShopProductsSortComponent
    ];
}
