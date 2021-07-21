import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductComponent } from './shop-product.component';

const routes: Routes = [
    { path: '', component: ShopProductComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShopProductRoutingModule {
    static components = [ShopProductComponent];
}
