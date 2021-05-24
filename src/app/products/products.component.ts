import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { ProductsService } from '../core/services/products.service';
import { ProductDataClass } from '../shared/classes.class';
import { EnumViewMode } from '../shared/enums.enum';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  viewMode = EnumViewMode.GRID;
  loading$: Observable<boolean>;
  products$: Observable<ProductDataClass[]>

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {
    this.products$ = this.productsService.entities$;
    this.loading$ = this.productsService.loading$;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAll();
  }

  changeViewMode(viewMode): void {
    this.viewMode = viewMode;
  }

  addToCart(product: ProductDataClass) {
    console.log(product, 'product');
    this.cartService.add(product);
  }


}
