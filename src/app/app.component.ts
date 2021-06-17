import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './core/services/cart.service';
import { EnumLocalStorageKeysName } from './shared/enums.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'AZET D.T.';
  loading = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private cartService: CartService) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading.next(true);
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading.next(false);
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit(): void {
    const getProductsFromLocalStorage = localStorage.getItem(EnumLocalStorageKeysName.PRODUCTS);
    console.log(JSON.parse(getProductsFromLocalStorage), 'getProductsFromLocalStorage')
    this.cartService.setCartProducts(JSON.parse(getProductsFromLocalStorage));
  }

  onClickMenu(sidenav: MatSidenav): void {
    sidenav.toggle();
  }
}
