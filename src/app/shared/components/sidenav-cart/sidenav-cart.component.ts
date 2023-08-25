import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ShopProductsDetailsDialogComponent } from 'src/app/shop-products/shop-products-details-dialog/shop-products-details-dialog.component';
import { Cart } from 'src/app/types/interface/cart';
import { Product } from 'src/app/types/interface/product';
import { CartService } from '../../service/cart.service';
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
    private offCanvasService: OffcanvasService,
    private dialog: MatDialog
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

  openProductDetails(product: Product): void {
    this.dialog.open(ShopProductsDetailsDialogComponent, {
      data: product,
    });
  }
}
