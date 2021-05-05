import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCardComponent } from './products-card/products-card.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    { path: '', component: ProductsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {
    static components = [ProductsComponent, ProductsCardComponent];
}
