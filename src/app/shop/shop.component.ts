import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { EnumLocalStorageKeysName } from '../shared/enums.enum';
import { ICart, ISelect } from '../shared/interfaces.interface';
import { azetDTGoogleMapsLocation, azetDtMenuHeaderItems } from '../shared/utils';
import { ShopDialogContentScheduleInServiceComponent } from './shop-dialog-content-schedule-in-service/shop-dialog-content-schedule-in-service.component';
import { ShopDialogContentScheduleComponent } from './shop-dialog-content-schedule/shop-dialog-content-schedule.component';

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
    public dialog: MatDialog
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

  openScheduleInService(): void {
    this.dialog.open(ShopDialogContentScheduleInServiceComponent);
  }

  openSchedule(): void {
    this.dialog.open(ShopDialogContentScheduleComponent);
  }
}
