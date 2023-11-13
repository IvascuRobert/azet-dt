import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../shared/service/cart.service';
import { Observable } from 'rxjs';
import { Cart } from '../types/interface/cart';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.scss',
})
export class ShopCartComponent {
  cart$ = new Observable<Cart[]>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }
}
