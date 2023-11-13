import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/types/interface/breadcrumb';
import { Cart } from 'src/app/types/interface/cart';
import { Product } from 'src/app/types/interface/product';
import { CartService } from '../../service/cart.service';
import { OffcanvasService } from '../../service/offcanvas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  breadcrumbs$ = new Observable<Breadcrumb[]>();
  cart$ = new Observable<Cart[]>();

  constructor(
    private offcanvasService: OffcanvasService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.breadcrumbs$ = this.offcanvasService.breadcrumbs$;
    this.cart$ = this.cartService.cart$;
  }

  toggleSidenavMenu(): void {
    this.offcanvasService.toggleOffcanvasSidenavMenu();
  }
}
