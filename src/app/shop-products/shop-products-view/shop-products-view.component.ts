import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { BaseCartItem } from 'src/app/shared/class/base-cart-item';
import { ViewMode } from 'src/app/shared/enum/view-mode';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-shop-products-view',
  templateUrl: './shop-products-view.component.html',
  styleUrls: ['./shop-products-view.component.scss']
})
export class ShopProductsViewComponent implements OnInit {

  viewMode = ViewMode.GRID;
  loading$: Observable<boolean>;
  products$: Observable<BaseCartItem[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService<BaseCartItem>
  ) {
    this.products$ = this.productsService.entities$;
    this.loading$ = this.productsService.loading$;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAll();
  }

  changeViewMode(viewMode: ViewMode): void {
    this.viewMode = viewMode;
  }

  // addCartProduct(product: DemoCartItem) {
  //   this.cartService.addCartProduct(product);
  // }

}
