import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductDetailsComponent } from './shop-product-detailscomponent';

const routes: Routes = [
    { path: '', component: ShopProductDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShopProductDetailsRoutingModule {
    static components = [ShopProductDetailsComponent];
}
