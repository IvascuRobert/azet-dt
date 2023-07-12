import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopCartComponent } from './shop-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ShopCartComponent,
    data: {
      breadcrumb: 'Cos',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopCartRoutingModule {}
