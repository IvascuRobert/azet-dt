import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { EnumLocalStorageKeysName } from '../shared/enums.enum';
import { ICart, ISelect } from '../shared/interfaces.interface';
import { azetDTGoogleMapsLocation, azetDtMenuHeaderItems } from '../shared/utils';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  azetDtLocation = azetDTGoogleMapsLocation;
  azetDtMenuHeaderItems: ISelect[] = azetDtMenuHeaderItems;
  cart$: Observable<ICart>;

  constructor(
    private router: Router,
    private cartService: CartService,
  ) {
    this.cart$ = this.cartService.cartProducts$;

    // temporarily removed;
    // this.router.events.subscribe((event: any) => {
    //   switch (true) {
    //     case event instanceof NavigationStart: {
    //       this.loading.next(true);
    //       break;
    //     }
    //     case event instanceof NavigationEnd: {
    //     }
    //     case event instanceof NavigationCancel:
    //     case event instanceof NavigationError: {
    //       this.loading.next(false);
    //       break;
    //     }
    //     default: {
    //       break;
    //     }
    //   }
    // });
  }

  ngOnInit(): void {
    const getProductsFromLocalStorage = localStorage.getItem(EnumLocalStorageKeysName.PRODUCTS);

    if (getProductsFromLocalStorage) {
      console.log(JSON.parse(getProductsFromLocalStorage), 'getProductsFromLocalStorage')
      this.cartService.setCartProducts(JSON.parse(getProductsFromLocalStorage));
    }

  }
}
