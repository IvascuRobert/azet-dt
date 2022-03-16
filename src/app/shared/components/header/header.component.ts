import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { showHideNavBarButtons } from 'src/app/shared/animations/animation';
import { BaseCartItem } from 'src/app/shared/class/base-cart-item';
import { ThemeName } from 'src/app/shared/enum/theme-name';
import { DropdownValue } from 'src/app/shared/interface/dropdown-value';
import { azetDTGoogleMapsLocation, azetDtMenuHeaderItems } from 'src/app/shared/utils/utils';
import { DialogContentScheduleInServiceComponent } from '../dialog-content-schedule-in-service/dialog-content-schedule-in-service.component';
import { DialogContentScheduleComponent } from '../dialog-content-schedule/dialog-content-schedule.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: [showHideNavBarButtons],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() adminView: boolean = false;
  @Output() openSideNavDrawer = new EventEmitter<boolean>();

  cart$: Observable<BaseCartItem>;
  azetDtLocation = azetDTGoogleMapsLocation;
  azetDtMenuHeaderItems: DropdownValue[] = azetDtMenuHeaderItems;
  theme: ThemeName | null = null;
  templateEnumThemeClassName = ThemeName;

  constructor(
    public cartService: CartService<BaseCartItem>,
    public dialog: MatDialog,
    private liveAnnouncer: LiveAnnouncer,
    private localStorageService: LocalStorageService,
    @Inject(DOCUMENT) private document: Document
  ) {
    // this.cart$ = this.cartService.cartProducts$;
    this.cart$ = of();

    // if (this.localStorageService.getStorageValueByKey(EnumLocalStorageKeysName.THEME) != null) {
    //   if (this.localStorageService.getStorageValueByKey(EnumLocalStorageKeysName.THEME) === EnumThemeClassName.LIGHT_THEME) {
    //     this.selectLightTheme();
    //   } else {
    //     this.selectDarkTheme();
    //   }
    // } else {
    //   this.theme = this.document.documentElement.classList
    //     .contains(EnumThemeClassName.DARK_THEME) ?
    //     EnumThemeClassName.DARK_THEME :
    //     EnumThemeClassName.LIGHT_THEME;
    //   this.localStorageService.storeValue(this.theme, EnumLocalStorageKeysName.THEME);
    // }
  }

  ngOnInit(): void {
  }

  removeCartProduct(product: BaseCartItem): void {
    // this.cartService.removeCartProduct(product);
  }

  clickMenuIcon(): void {
    this.openSideNavDrawer.emit(true);
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

  switchTheme(): void {
    // if (this.localStorageService.getStorageValueByKey(EnumLocalStorageKeysName.THEME) === EnumThemeClassName.LIGHT_THEME) {
    //   this.selectDarkTheme();
    // } else {
    //   this.selectLightTheme();
    // }
  }

  selectDarkTheme(): void {
    // this.document.documentElement.classList.add(EnumThemeClassName.DARK_THEME);
    // this.theme = EnumThemeClassName.DARK_THEME;
    // this.localStorageService.storeValue(this.theme, EnumLocalStorageKeysName.THEME);
  }

  selectLightTheme(): void {
    // this.document.documentElement.classList.remove(EnumThemeClassName.DARK_THEME);
    // this.theme = EnumThemeClassName.LIGHT_THEME;
    // this.localStorageService.storeValue(this.theme, EnumLocalStorageKeysName.THEME);
  }
}
