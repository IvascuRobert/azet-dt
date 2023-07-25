import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/types/interface/product';
import { ShopProductsDetailsDialogComponent } from '../shop-products-details-dialog/shop-products-details-dialog.component';

@Component({
  selector: 'app-shop-products-item',
  templateUrl: './shop-products-item.component.html',
  styleUrls: ['./shop-products-item.component.scss'],
})
export class ShopProductsItemComponent {
  @Input() product!: Product;

  constructor(public dialog: MatDialog) {}

  openProductDetails(product: Product): void {
    this.dialog.open(ShopProductsDetailsDialogComponent, {
      data: product,
    });
  }
}
