import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { NgrxProductsService } from '../core/services/ngrx-products.service';
import { ProductClass } from '../shared/classes.class';
import { EnumViewMode } from '../shared/enums.enum';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  viewMode = EnumViewMode.GRID;
  loading$: Observable<boolean>;
  products$: Observable<ProductClass[]>

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
