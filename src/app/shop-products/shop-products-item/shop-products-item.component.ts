import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types/interface/product';

@Component({
  selector: 'app-shop-products-item',
  templateUrl: './shop-products-item.component.html',
  styleUrls: ['./shop-products-item.component.scss'],
})
export class ShopProductsItemComponent {
  @Input() product!: Product;
}
