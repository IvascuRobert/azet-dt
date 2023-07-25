import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductsComponent } from './shop-products.component';

const routes: Routes = [
  {
    path: '',
    component: ShopProductsComponent,
    data: {
      breadcrumb: 'Anvelope',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopProductsRoutingModule {}
