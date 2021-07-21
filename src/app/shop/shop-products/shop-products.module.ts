import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopProductsRoutingModule } from './shop-products-routing.module';

@NgModule({
  imports: [
    ShopProductsRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatTreeModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ShopProductsRoutingModule.components]
})

export class ShopProductsModule { }
