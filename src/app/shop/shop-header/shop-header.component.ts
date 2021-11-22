import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { showHideNavBarButtons } from 'src/app/shared/animation';
import { ProductClass } from 'src/app/shared/classes.class';
import { ICart, ISelect, ISiteTheme } from 'src/app/shared/interfaces.interface';
import { azetDTGoogleMapsLocation, azetDtMenuHeaderItems, azetDtThemes } from 'src/app/shared/utils';
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
  currentTheme: ISiteTheme | undefined;

  // The below colors need to align with the themes defined in theme-picker.scss
  themes: ISiteTheme[] = azetDtThemes;

  @Output() openSideNavDrawer = new EventEmitter<boolean>();

  constructor(
    public cartService: CartService,
    private themeService: ThemeService,
    public dialog: MatDialog,
    private liveAnnouncer: LiveAnnouncer
  ) {
    this.cart$ = this.cartService.cartProducts$;
    const themeName = this.themeService.getStoredThemeName();

    if (themeName) {
      this.findAndChangeTheme(themeName);
    } else {
      this.themes.find(themes => {
        if (themes.isDefault === true) {
          this.findAndChangeTheme(themes.name);
        }
      });
    }
  }

  ngOnInit(): void {
  }

  removeCartProduct(product: ProductClass): void {
    this.cartService.removeCartProduct(product);
  }

  selectTheme(event: any) {
    this.findAndChangeTheme(event);
  }

  clickMenuIcon(): void {
    this.openSideNavDrawer.emit(true);
  }

  findAndChangeTheme(findBy: string | boolean) {
    const keyToFind = (typeof findBy === 'boolean') ? 'isDark' : 'name'
    const theme = this.themes.find(currentTheme => currentTheme[keyToFind] === findBy);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    if (theme.isDefault) {
      this.themeService.removeStyle('theme');
    } else {
      this.themeService.setStyle('theme', `${theme.name}.css`);
    }

    if (this.currentTheme) {
      this.liveAnnouncer.announce(`${theme.displayName} theme selected.`, 'polite', 3000);
      this.themeService.storeTheme(this.currentTheme);
    }
  }

  openScheduleInService(): void {
    this.dialog.open(ShopDialogContentScheduleInServiceComponent);
  }

  openSchedule(): void {
    this.dialog.open(ShopDialogContentScheduleComponent);
  }
}
