import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { ProductsSortComponent } from './products-sort/products-sort.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    { path: '', component: ProductsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {
    static components = [
        ProductsComponent,
        ProductsFilterComponent,
        ProductsSortComponent
    ];
}
