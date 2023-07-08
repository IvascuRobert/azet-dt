import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ShopProductsComponent } from './shop-products.component';
import { ShopProductsRoutingModule } from './shop-contact-routing.module';

@NgModule({
  declarations: [
    ShopProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ShopProductsRoutingModule
  ]
})
export class ShopProductsModule { }
