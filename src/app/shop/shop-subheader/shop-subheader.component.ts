import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { TrackByService } from 'src/app/core/services/trackBy.service';
import { ProductClass } from 'src/app/shared/classes.class';
import { ICart } from 'src/app/shared/interfaces.interface';

@Component({
  selector: 'app-shop-subheader',
  templateUrl: './shop-subheader.component.html',
  styleUrls: ['./shop-subheader.component.scss']
})
export class ShopSubheaderComponent implements OnInit {

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
