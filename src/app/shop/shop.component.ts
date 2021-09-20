import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../core/services/cart.service';
import { EnumLocalStorageKeysName } from '../shared/enums.enum';
import { ISelect } from '../shared/interfaces.interface';
import { azetDTGoogleMapsLocation, azetDtMenuHeaderItems } from '../shared/utils';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  azetDtLocation = azetDTGoogleMapsLocation;
  azetDtMenuHeaderItems: ISelect[] = azetDtMenuHeaderItems;

  constructor(
    private router: Router,
    private cartService: CartService,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

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


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
