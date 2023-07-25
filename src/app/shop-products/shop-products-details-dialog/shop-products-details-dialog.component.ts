import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/types/interface/product';
import { ShopProductsItemComponent } from '../shop-products-item/shop-products-item.component';

@Component({
  selector: 'app-shop-products-details-dialog',
  templateUrl: './shop-products-details-dialog.component.html',
  styleUrls: ['./shop-products-details-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopProductsDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ShopProductsItemComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close();
  }
}
