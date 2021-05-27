import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { ICartStateTree } from '../shared/interfaces.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {

  cartState$: Observable<ICartStateTree>;

  constructor(public cartService: CartService) {
    this.cartState$ = this.cartService.state$;
  }

  ngOnInit(): void {
  }

}
