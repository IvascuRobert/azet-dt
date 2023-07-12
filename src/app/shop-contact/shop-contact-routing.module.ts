import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopContactComponent } from './shop-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ShopContactComponent,
    data: {
      breadcrumb: 'Contact',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopContactRoutingModule {}
