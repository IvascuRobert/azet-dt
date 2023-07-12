import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { ShopProductsRoutingModule } from './shop-contact-routing.module';
import { ShopProductsDetailsComponent } from './shop-products-details/shop-products-details.component';
import { ShopProductsItemComponent } from './shop-products-item/shop-products-item.component';
import { ShopProductsComponent } from './shop-products.component';
import { ShopProductsDetailsDialogComponent } from './shop-products-details-dialog/shop-products-details-dialog.component';

@NgModule({
  declarations: [
    ShopProductsComponent,
    ShopProductsDetailsComponent,
    ShopProductsItemComponent,
    ShopProductsDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ShopProductsRoutingModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class ShopProductsModule {}
