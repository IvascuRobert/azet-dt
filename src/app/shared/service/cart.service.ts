import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/types/interface/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart$ = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.loadLocalCart();
  }

  public addToCart(product: Product): void {
    const products = this.cart$.getValue();
    products.push(product);
    localStorage.setItem('cart', JSON.stringify(products));
    this.cart$.next(products);
  }

  private loadLocalCart(): void {
    const localCart = localStorage.getItem('cart');
    const parseLocalCart: Product[] = localCart ? JSON.parse(localCart) : [];
    this.cart$.next(parseLocalCart);
  }
}
