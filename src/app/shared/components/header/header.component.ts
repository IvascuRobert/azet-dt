import { Component, OnInit } from '@angular/core';
import { OffcanvasService } from '../../service/offcanvas.service';
import { Observable, map, tap } from 'rxjs';
import { Breadcrumb } from 'src/app/types/interface/breadcrumb';
import { Product } from 'src/app/types/interface/product';
import { CartService } from '../../service/cart.service';
import * as _ from 'lodash';
import { Cart } from 'src/app/types/interface/cart';

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

  toggleMenu(): void {
    this.offcanvasService.toggleOffcanvasNavigation();
  }
}
