import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { showHideNavBarButtons } from 'src/app/shared/animation';
import { ProductClass } from 'src/app/shared/classes.class';
import { ICart, ISelect } from 'src/app/shared/interfaces.interface';
import { azetDTGoogleMapsLocation, azetDtMenuHeaderItems } from 'src/app/shared/utils';
import { ShopDialogContentScheduleInServiceComponent } from '../shop-dialog-content-schedule-in-service/shop-dialog-content-schedule-in-service.component';
import { ShopDialogContentScheduleComponent } from '../shop-dialog-content-schedule/shop-dialog-content-schedule.component';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  animations: [showHideNavBarButtons],
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {

  cart$: Observable<ICart>;
  azetDtLocation = azetDTGoogleMapsLocation;
  azetDtMenuHeaderItems: ISelect[] = azetDtMenuHeaderItems;
  darkMode$: Observable<boolean>;

  @Output() openSideNavDrawer = new EventEmitter<boolean>();

  constructor(
    public cartService: CartService,
    private themeService: ThemeService,
    public dialog: MatDialog
  ) {
    this.cart$ = this.cartService.cartProducts$;
    const darkMode: boolean = this.themeService.getStoredThemeMode();

    if (darkMode != null) {
      this.themeService.setDarkMode(darkMode);
    } else {
      this.setDarkMode({ checked: true });
    }
  }

  ngOnInit(): void {
    this.darkMode$ = this.themeService.darkMode$;
  }

  removeCartProduct(product: ProductClass): void {
    this.cartService.removeCartProduct(product);
  }

  setDarkMode({ checked }) {
    this.themeService.setDarkMode(checked);
    this.themeService.storeTheme(checked);
  }

  clickMenuIcon(): void {
    this.openSideNavDrawer.emit(true);
  }

  openScheduleInService(): void {
    this.dialog.open(ShopDialogContentScheduleInServiceComponent);
  }

  openSchedule(): void {
    this.dialog.open(ShopDialogContentScheduleComponent);
  }
}
