import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopAuthenticationViewComponent } from './shop-authentication-view/shop-authentication-view.component';

const routes: Routes = [{ path: '', component: ShopAuthenticationViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopAuthenticationRoutingModule { }
