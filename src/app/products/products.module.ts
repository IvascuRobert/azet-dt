import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    ProductsRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [ProductsRoutingModule.components]
})

export class ProductsModule { }
