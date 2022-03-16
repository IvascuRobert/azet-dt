import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { BaseCartItem } from 'src/app/shared/class/base-cart-item';
import { State } from 'src/app/shared/enum/state';
import { ProductsService } from 'src/app/shop-products/service/products.service';

@Component({
  selector: 'app-shop-home-popular-products',
  templateUrl: './shop-home-popular-products.component.html',
  styleUrls: ['./shop-home-popular-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHomePopularProductsComponent implements OnInit {
  stateTemplate = State;
  loading$: Observable<boolean> = of(false);
  popularProducts$: Observable<BaseCartItem[]> = of([]);

  constructor(
    private cartService: CartService<BaseCartItem>,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getAll();
    this.popularProducts$ = this.productsService.entities$.pipe(map(products => products.slice(0, 3)));
    this.loading$ = this.productsService.loading$;
  }

  addCartProduct(product: BaseCartItem) {
    // this.cartService.addCartProduct(product);
  }

}
