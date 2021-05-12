import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    ProductsRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule
  ],
  declarations: [ProductsRoutingModule.components]
})

export class ProductsModule { }
