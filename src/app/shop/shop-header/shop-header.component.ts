import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { TrackByService } from 'src/app/core/services/trackBy.service';
import { showHideNavBarButtons } from 'src/app/shared/animation';
import { ProductClass } from 'src/app/shared/classes.class';
import { ICart, ISelect } from 'src/app/shared/interfaces.interface';
import { azetDTGoogleMapsLocation, azetDtMenuHeaderItems } from 'src/app/shared/utils';

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
    public trackbyService: TrackByService,
    public cartService: CartService,
    private themeService: ThemeService
  ) {
    this.cart$ = this.cartService.cartProducts$;
  }

  ngOnInit(): void {
    this.darkMode$ = this.themeService.darkMode$;
  }

  removeCartProduct(product: ProductClass): void {
    this.cartService.removeCartProduct(product);
  }

  setDarkMode({ checked }: MatSlideToggleChange) {
    this.themeService.setDarkMode(checked);
  }

  clickMenuIcon() {
    this.openSideNavDrawer.emit(true);
  }
}
