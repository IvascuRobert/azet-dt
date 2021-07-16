import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { NgrxProductsService } from 'src/app/core/services/ngrx-products.service';
import { ProductClass } from 'src/app/shared/classes.class';
import { EnumViewMode } from 'src/app/shared/enums.enum';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {

  viewMode = EnumViewMode.GRID;
  loading$: Observable<boolean>;
  products$: Observable<ProductClass[]>;

  constructor(
    private ngrxProductsService: NgrxProductsService,
    private cartService: CartService
  ) {
    this.products$ = this.ngrxProductsService.entities$;
    this.loading$ = this.ngrxProductsService.loading$;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.ngrxProductsService.getAll();
  }

  changeViewMode(viewMode): void {
    this.viewMode = viewMode;
  }

  addCartProduct(product: ProductClass) {
    this.cartService.addCartProduct(product);
  }

}
