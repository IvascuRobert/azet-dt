import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isUndefined } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { MessageType } from 'src/app/types/enum/message-type';
import { Cart } from 'src/app/types/interface/cart';
import { Message } from 'src/app/types/interface/message';
import { Product } from 'src/app/types/interface/product';
import { MessageComponent } from '../components/message/message.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart$ = new BehaviorSubject<Cart[]>([]);

  constructor(private readonly snackBar: MatSnackBar) {
    this.loadLocalCart();
  }

  addToCart(product: Product): void {
    const cart = this.cart$.getValue();

    const productExistInCart = cart.find(
      (cart) => cart.product.id === product.id
    );

    if (isUndefined(productExistInCart)) {
      cart.push({
        product,
        quantity: 1,
        user: '1',
      });
    } else {
      productExistInCart.quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart$.next(cart);

    this.snackBar.openFromComponent(MessageComponent, {
      data: {
        message: 'Produsul a fost adaugat in cos!',
        type: MessageType.SUCCESS,
      } as Message,
    });
  }

  removeFromCart(product: Product): void {
    const cart = this.cart$.getValue();

    const productCartIndex = cart.findIndex(
      (cartProduct) => cartProduct.product.id === product.id
    );

    cart.splice(productCartIndex, 1);

    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart$.next(cart);

    this.snackBar.openFromComponent(MessageComponent, {
      data: {
        message: 'Produsul a fost sters din cos!',
        type: MessageType.SUCCESS,
      } as Message,
    });
  }

  private loadLocalCart(): void {
    const localCart = localStorage.getItem('cart');
    const parseLocalCart: Cart[] = localCart ? JSON.parse(localCart) : [];
    this.cart$.next(parseLocalCart);
  }
}
