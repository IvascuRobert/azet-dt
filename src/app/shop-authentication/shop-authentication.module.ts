import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ShopAuthenticationRoutingModule } from './shop-authentication-routing.module';
import { ShopAuthenticationComponent } from './shop-authentication.component';

@NgModule({
  declarations: [
    ShopAuthenticationComponent
  ],
  imports: [
    CommonModule,
    ShopAuthenticationRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
  ]
})
export class ShopAuthenticationModule {
}
