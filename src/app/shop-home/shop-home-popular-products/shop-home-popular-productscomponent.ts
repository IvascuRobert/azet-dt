import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/class/base-cart-item';
import { State } from 'src/app/shared/enum/state';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-shop-home-popular-products',
  templateUrl: './shop-home-popular-products.component.html',
  styleUrls: ['./shop-home-popular-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHomePopularProductsComponent implements OnInit {
  stateTemplate = State;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // this.productsService.getAll();
    // this.popularProducts$ = this.productsService.entities$.pipe(map(products => products.slice(0, 3)));
  }

  addCartProduct(product: Product) {
    // this.cartService.addCartProduct(product);
  }

}
