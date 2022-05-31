import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/shared/class/base-cart-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openSideNavDrawer = new EventEmitter<boolean>();

  cart$: Observable<Product>;
  isOpen = false;

  constructor(
    // public cartService: CartService<Product>,
    public dialog: MatDialog
  ) {
    // this.cart$ = this.cartService.cartProducts$;
    this.cart$ = of();
  }

  ngOnInit(): void {
  }

  removeCartProduct(product: Product): void {
    // this.cartService.removeCartProduct(product);
  }

  clickMenuIcon(): void {
    this.openSideNavDrawer.emit(true);
  }
}
