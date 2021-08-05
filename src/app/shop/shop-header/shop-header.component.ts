import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { TrackByService } from 'src/app/core/services/trackBy.service';
import { showHideNavBarButtons } from 'src/app/shared/animation';
import { ProductClass } from 'src/app/shared/classes.class';
import { ICart } from 'src/app/shared/interfaces.interface';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  animations: [showHideNavBarButtons],
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {

  @Input() loading: boolean;

  cart$: Observable<ICart>;
  activateAnimation = false;
  totalHeighToScrollDownToActivateAnimation: number;

  @ViewChild('subnavbar') subnavbar: MatToolbar;
  @ViewChild('navbar') navbar: MatToolbar;

  @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
    const scrollTop = this.getYPosition(e);
    if (scrollTop >= this.totalHeighToScrollDownToActivateAnimation) {
      this.activateAnimation = true;
    } else {
      this.activateAnimation = false;
    }
    console.log(this.getYPosition(e), 'this.getYPosition(e)')
  }

  constructor(
    public trackbyService: TrackByService,
    public cartService: CartService
  ) {
    this.cart$ = this.cartService.cartProducts$;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const subNavBarHeigh = (this.subnavbar._elementRef as ElementRef).nativeElement.offsetHeight;
    const navBarHeigh = (this.navbar._elementRef as ElementRef).nativeElement.offsetHeight;

    // compute total heigh to scroll down until navbar is over subnavbar
    // take subnavbar heigh and decrese navbar heigh
    this.totalHeighToScrollDownToActivateAnimation = subNavBarHeigh - navBarHeigh; // if scroll arrive to this height this means the navbar cover subnavbar

  }

  removeCartProduct(product: ProductClass): void {
    this.cartService.removeCartProduct(product);
  }

  getYPosition(e: Event): number {
    return ((e.target as Document).documentElement as HTMLElement).scrollTop;
  }
}
