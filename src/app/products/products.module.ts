import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [ProductsRoutingModule, SharedModule, MatCardModule, MatButtonModule],
  declarations: [ProductsRoutingModule.components]
})

export class ProductsModule { }
