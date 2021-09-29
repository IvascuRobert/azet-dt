import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { NgrxProductsService } from 'src/app/core/services/ngrx-products.service';
import { ProductClass } from 'src/app/shared/classes.class';
import { EnumState } from 'src/app/shared/enums.enum';

@Component({
  selector: 'app-shop-home-popular-products',
  templateUrl: './shop-home-popular-products.component.html',
  styleUrls: ['./shop-home-popular-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHomePopularProductsComponent implements OnInit {
  stateTemplate = EnumState;
  loading$: Observable<boolean> = of(false);
  popularProducts$: Observable<ProductClass[]> = of([]);

  constructor(
    private cartService: CartService,
    private ngrxProductsService: NgrxProductsService
  ) { }

  ngOnInit(): void {
    this.ngrxProductsService.getAll();
    this.popularProducts$ = this.ngrxProductsService.entities$.pipe(map(products => products.slice(0, 3)));
    this.loading$ = this.ngrxProductsService.loading$;
  }

  addCartProduct(product: ProductClass) {
    this.cartService.addCartProduct(product);
  }

}
