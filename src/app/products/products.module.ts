import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    ProductsRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule
  ],
  declarations: [ProductsRoutingModule.components]
})

export class ProductsModule { }
