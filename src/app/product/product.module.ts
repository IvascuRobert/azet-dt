import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [ProductRoutingModule, SharedModule],
  declarations: [ProductRoutingModule.components]
})

export class ProductModule { }
