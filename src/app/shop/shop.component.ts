import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { EnumLocalStorageKeysName } from '../shared/enums.enum';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  loading = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private cartService: CartService) {
    this.router.events.subscribe((event: any) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading.next(true);
          break;
        }
        case event instanceof NavigationEnd: {
        }
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

    if (getProductsFromLocalStorage) {
      console.log(JSON.parse(getProductsFromLocalStorage), 'getProductsFromLocalStorage')
      this.cartService.setCartProducts(JSON.parse(getProductsFromLocalStorage));
    }

  }

}
