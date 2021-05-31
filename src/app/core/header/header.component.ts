import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductClass } from 'src/app/shared/classes.class';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() clickMenu = new EventEmitter<boolean>();

  // cartState$: Observable<ICartStateTree>;

  constructor(public cartService: CartService) {
    // this.cartState$ = this.cartService.state$;
  }

  ngOnInit(): void {
  }

  clickOnMenu(): void {
    this.clickMenu.emit(true);
  }

  removeCartItem(itemCart: ProductClass): void {
    this.cartService.addCartProduct(itemCart);
  }
}
