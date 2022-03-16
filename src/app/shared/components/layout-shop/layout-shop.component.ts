import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DropdownValue } from '../../interface/dropdown-value';
import { azetDTGoogleMapsLocation, azetDtMenuHeaderItems } from '../../utils/utils';
import { DialogContentScheduleInServiceComponent } from '../dialog-content-schedule-in-service/dialog-content-schedule-in-service.component';
import { DialogContentScheduleComponent } from '../dialog-content-schedule/dialog-content-schedule.component';

@Component({
  selector: 'app-layout-shop',
  templateUrl: './layout-shop.component.html',
  styleUrls: ['./layout-shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutShopComponent implements OnInit {

  azetDtLocation = azetDTGoogleMapsLocation;
  azetDtMenuHeaderItems: DropdownValue[] = azetDtMenuHeaderItems;
  // cart$: Observable<Cart>;

  constructor(
    // private router: Router,
    // private cartService: CartService,
    public dialog: MatDialog
  ) {
    // this.cart$ = this.cartService.cartProducts$;

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
    // const getProductsFromLocalStorage = localStorage.getItem(EnumLocalStorageKeysName.PRODUCTS);

    // if (getProductsFromLocalStorage) {
    //   console.log(JSON.parse(getProductsFromLocalStorage), 'getProductsFromLocalStorage')
    //   this.cartService.setCartProducts(JSON.parse(getProductsFromLocalStorage));
    // }
  }

  openScheduleInService(): void {
    this.dialog.open(DialogContentScheduleInServiceComponent, {
      width: '400px',
      disableClose: true
    });
  }

  openSchedule(): void {
    this.dialog.open(DialogContentScheduleComponent);
  }
}
