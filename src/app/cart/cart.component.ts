import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { TrackByService } from '../core/services/trackBy.service';
import { ProductClass } from '../shared/classes.class';
import { EnumState } from '../shared/enums.enum';
import { ICart } from '../shared/interfaces.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class  CartComponent implements OnInit {

  cart$: Observable<ICart>;
  tabIndex = 0;
  stateTemplate = EnumState;

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
