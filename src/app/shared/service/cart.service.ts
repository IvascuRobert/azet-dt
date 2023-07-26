import { Injectable } from '@angular/core';
import { isUndefined } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/types/interface/cart';
import { Product } from 'src/app/types/interface/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart$ = new BehaviorSubject<Cart[]>([]);

  constructor() {
    this.loadLocalCart();
  }

  public addToCart(product: Product): void {
    const cart = this.cart$.getValue();

    const productExistInCart = cart.find(
      (cart) => cart.product.id === product.id
    );

    if (isUndefined(productExistInCart)) {
      cart.push({
        product,
        price: product.price,
        quantity: 1,
        user: '1',
      });
    } else {
      productExistInCart.quantity++;
      productExistInCart.price =
        productExistInCart.product.price * productExistInCart.quantity;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart$.next(cart);
  }

  private loadLocalCart(): void {
    const localCart = localStorage.getItem('cart');
    const parseLocalCart: Cart[] = localCart ? JSON.parse(localCart) : [];
    this.cart$.next(parseLocalCart);
  }
}
