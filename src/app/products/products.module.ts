import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [ProductsRoutingModule, SharedModule],
  declarations: [ProductsRoutingModule.components]
})

export class ProductsModule { }
