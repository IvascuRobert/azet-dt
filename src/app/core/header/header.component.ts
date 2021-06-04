import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductClass } from 'src/app/shared/classes.class';
import { ICart } from 'src/app/shared/interfaces.interface';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { TrackByService } from '../services/trackBy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() loading: boolean;
  @Output() clickMenu = new EventEmitter<boolean>();

  cart$: Observable<ICart>;

  constructor(
    public trackbyService: TrackByService,
    public cartService: CartService,
    public authService: AuthService
  ) {
    this.cart$ = this.cartService.cartProducts$;
  }

  ngOnInit(): void {
  }

  clickOnMenu(): void {
    this.clickMenu.emit(true);
  }

  removeCartProduct(product: ProductClass): void {
    this.cartService.removeCartProduct(product);
  }
}
