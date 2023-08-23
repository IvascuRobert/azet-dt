import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/types/interface/cart';
import { CartService } from '../../service/cart.service';
import { Product } from 'src/app/types/interface/product';
import { OffcanvasService } from '../../service/offcanvas.service';

@Component({
  selector: 'app-sidenav-cart',
  templateUrl: './sidenav-cart.component.html',
  styleUrls: ['./sidenav-cart.component.scss'],
})
export class SidenavCartComponent {
  cart$ = new Observable<Cart[]>();

  constructor(
    private cartService: CartService,
    private offCanvasService: OffcanvasService
  ) {}

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  closeSidenavCart(): void {
    this.offCanvasService.closeOffcanvasSidenavCart();
  }
}
