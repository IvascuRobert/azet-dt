import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { TrackByService } from 'src/app/core/services/trackBy.service';
import { showHideNavBarButtons } from 'src/app/shared/animation';
import { ProductClass } from 'src/app/shared/classes.class';
import { ICart } from 'src/app/shared/interfaces.interface';
import { azetDTGoogleMapsLocation } from 'src/app/shared/utils';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  animations: [showHideNavBarButtons],
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {

  cart$: Observable<ICart>;
  azetDtLocation = azetDTGoogleMapsLocation;

  constructor(
    public trackbyService: TrackByService,
    public cartService: CartService
  ) {
    this.cart$ = this.cartService.cartProducts$;
  }

  ngOnInit(): void {
  }

  removeCartProduct(product: ProductClass): void {
    this.cartService.removeCartProduct(product);
  }

  getYPosition(e: Event): number {
    return ((e.target as Document).documentElement as HTMLElement).scrollTop;
  }
}
