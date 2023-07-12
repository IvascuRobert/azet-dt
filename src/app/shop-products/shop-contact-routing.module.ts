import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductsComponent } from './shop-products.component';
import { ShopProductsDetailsComponent } from './shop-products-details/shop-products-details.component';

const routes: Routes = [
  {
    path: '',
    component: ShopProductsComponent,
    data: {
      breadcrumb: 'Anvelope',
    },
    children: [
      {
        path: ':id',
        component: ShopProductsDetailsComponent,
        data: {
          breadcrumb: 'Detalii',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopProductsRoutingModule {}
