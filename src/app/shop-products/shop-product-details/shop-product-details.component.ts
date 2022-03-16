import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { BaseCartItem } from 'src/app/shared/class/base-cart-item';
import { State } from 'src/app/shared/enum/state';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-shop-product-details',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.scss']
})
export class ShopProductDetailsComponent implements OnInit {

  stateTemplate = State;
  loading$: Observable<boolean>;
  product$: Observable<BaseCartItem[] | null> // productsService.getByKey return an array of one product

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    public cartService: CartService<BaseCartItem>
  ) {
    this.product$ = this.productsService.entities$;
    this.loading$ = this.productsService.loading$;
  }

  ngOnInit(): void {
    const productId: string | null = this.route.parent?.snapshot.params['id'];

    if (productId) {
      this.productsService.getByKey(productId);
    }
  }

  addCartProduct(product: BaseCartItem) {
    // this.cartService.addCartProduct(product);
  }
}
