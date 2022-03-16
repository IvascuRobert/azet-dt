import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductDetailsComponent } from './shop-product-details/shop-product-details.component';
import { ShopProductsViewComponent } from './shop-products-view/shop-products-view.component';

const routes: Routes = [
    { path: '', component: ShopProductsViewComponent },
    { path: ':id', component: ShopProductDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShopProductsRoutingModule {
}
