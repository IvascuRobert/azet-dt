import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopAuthenticationComponent } from './shop-authentication.component';

const routes: Routes = [{ path: '', component: ShopAuthenticationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopAuthenticationRoutingModule { }
