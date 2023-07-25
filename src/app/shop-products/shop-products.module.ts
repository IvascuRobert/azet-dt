import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ShopProductsRoutingModule } from './shop-contact-routing.module';
import { ShopProductsDetailsDialogComponent } from './shop-products-details-dialog/shop-products-details-dialog.component';
import { ShopProductsItemComponent } from './shop-products-item/shop-products-item.component';
import { ShopProductsComponent } from './shop-products.component';

@NgModule({
  declarations: [
    ShopProductsComponent,
    ShopProductsItemComponent,
    ShopProductsDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ShopProductsRoutingModule,
  ],
})
export class ShopProductsModule {}
