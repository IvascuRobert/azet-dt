import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/class/base-cart-item';
import { State } from 'src/app/shared/enum/state';
import { CartService } from 'src/app/shared/service/cart.service';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-shop-product-details',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.scss']
})
export class ShopProductDetailsComponent implements OnInit {

  stateTemplate = State;
  product$ = new Observable<Product[]>();

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    const productId: string | null = this.route.parent?.snapshot.params['id'];

    if (productId) {
      this.product$ = this.productsService.getById(productId);
    }
  }

  addCartProduct(product: Product) {
    // this.cartService.addCartProduct(product);
  }
}
