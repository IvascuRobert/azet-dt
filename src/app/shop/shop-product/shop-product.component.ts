import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { NgrxProductsService } from 'src/app/core/services/ngrx-products.service';
import { ProductClass } from 'src/app/shared/classes.class';
import { EnumState } from 'src/app/shared/enums.enum';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {

  stateTemplate = EnumState;
  loading$: Observable<boolean>;
  product$: Observable<ProductClass[] | null> // ngrxProductsService.getByKey return an array of one product

  constructor(
    private route: ActivatedRoute,
    private ngrxProductsService: NgrxProductsService,
    public cartService: CartService
  ) {
    this.product$ = this.ngrxProductsService.entities$;
    this.loading$ = this.ngrxProductsService.loading$;
  }

  ngOnInit(): void {
    const productId: string | null = this.route.parent?.snapshot.params['id'];

    if (productId) {
      this.ngrxProductsService.getByKey(productId);
    }
  }

  addCartProduct(product: ProductClass) {
    this.cartService.addCartProduct(product);
  }
}
