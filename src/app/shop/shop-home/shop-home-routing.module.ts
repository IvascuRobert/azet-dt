import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopHomePopularProductsComponent } from './shop-home-popular-products/shop-home-popular-productscomponent';
import { ShopHomeComponent } from './shop-home.component';

const routes: Routes = [
    { path: '', component: ShopHomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShopHomeRoutingModule {
    static components = [
        ShopHomeComponent,
        ShopHomePopularProductsComponent,
    ];
}
