import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductDataClass } from 'src/app/shared/classes.class';
import { EnumState } from 'src/app/shared/enums.enum';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularProductsComponent implements OnInit {
  stateTemplate = EnumState;
  loading$: Observable<boolean>;
  popularProducts$: Observable<ProductDataClass[]>

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
    this.popularProducts$ = this.productService.entities$.pipe(map(products => products.slice(0, 3)));
    this.loading$ = this.productService.loading$;
  }

  addToCart(product: ProductDataClass) {
    console.log(product, 'product');
    this.cartService.add(product);
  }

}
