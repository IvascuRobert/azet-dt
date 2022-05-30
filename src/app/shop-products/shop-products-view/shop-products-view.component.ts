import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/class/base-cart-item';
import { ViewMode } from 'src/app/shared/enum/view-mode';
import { CartService } from 'src/app/shared/service/cart.service';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-shop-products-view',
  templateUrl: './shop-products-view.component.html',
  styleUrls: ['./shop-products-view.component.scss']
})
export class ShopProductsViewComponent implements OnInit {

  viewMode = ViewMode.GRID;
  products$ = new Observable<Product[]>();

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products$ = this.productsService.getAll();
  }

  changeViewMode(viewMode: ViewMode): void {
    this.viewMode = viewMode;
  }

  // addCartProduct(product: DemoCartItem) {
  //   this.cartService.addCartProduct(product);
  // }

}
