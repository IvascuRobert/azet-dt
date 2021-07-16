import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { TrackByService } from 'src/app/core/services/trackBy.service';
import { ProductClass } from 'src/app/shared/classes.class';
import { ICart } from 'src/app/shared/interfaces.interface';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {

  @Input() loading: boolean;

  cart$: Observable<ICart>;

  constructor(
    public trackbyService: TrackByService,
    public cartService: CartService
  ) {
    this.cart$ = this.cartService.cartProducts$;
  }

  ngOnInit(): void {
  }

  removeCartProduct(product: ProductClass): void {
    this.cartService.removeCartProduct(product);
  }
}
