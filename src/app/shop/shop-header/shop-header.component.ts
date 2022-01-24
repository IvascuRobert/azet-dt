import { LiveAnnouncer } from '@angular/cdk/a11y';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { showHideNavBarButtons } from 'src/app/shared/animation';
import { ProductClass } from 'src/app/shared/classes.class';
import { EnumLocalStorageKeysName, EnumThemeClassName } from 'src/app/shared/enums.enum';
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
  theme: EnumThemeClassName | null = null;
  templateEnumThemeClassName = EnumThemeClassName;

  @Output() openSideNavDrawer = new EventEmitter<boolean>();

  constructor(
    public cartService: CartService,
    public dialog: MatDialog,
    private liveAnnouncer: LiveAnnouncer,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.cart$ = this.cartService.cartProducts$;

    if (this.getStoredThemeName() != null) {
      if (this.getStoredThemeName() === EnumThemeClassName.LIGHT_THEME) {
        this.selectLightTheme();
      } else {
        this.selectDarkTheme();
      }
    } else {
      this.theme = this.document.documentElement.classList
        .contains(EnumThemeClassName.DARK_THEME) ?
        EnumThemeClassName.DARK_THEME :
        EnumThemeClassName.LIGHT_THEME;
      this.storeTheme(this.theme);
    }
  }

  ngOnInit(): void {
  }

  removeCartProduct(product: ProductClass): void {
    this.cartService.removeCartProduct(product);
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

  switchTheme(): void {
    if (this.getStoredThemeName() === EnumThemeClassName.LIGHT_THEME) {
      this.selectDarkTheme();
    } else {
      this.selectLightTheme();
    }
  }

  selectDarkTheme(): void {
    this.document.documentElement.classList.add(EnumThemeClassName.DARK_THEME);
    this.theme = EnumThemeClassName.DARK_THEME;
    this.storeTheme(this.theme);
  }

  selectLightTheme(): void {
    this.document.documentElement.classList.remove(EnumThemeClassName.DARK_THEME);
    this.theme = EnumThemeClassName.LIGHT_THEME;
    this.storeTheme(this.theme);
  }

  storeTheme(theme: EnumThemeClassName): void {
    try {
      window.localStorage[EnumLocalStorageKeysName.THEME] = theme;
    } catch { }
  }

  getStoredThemeName(): EnumThemeClassName | null {
    try {
      return window.localStorage[EnumLocalStorageKeysName.THEME] || null;
    } catch {
      return null;
    }
  }

  clearStorage(): void {
    try {
      window.localStorage.removeItem(EnumLocalStorageKeysName.THEME);
    } catch { }
  }
}
