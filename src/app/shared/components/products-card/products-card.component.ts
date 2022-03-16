import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseCartItem } from '../../class/base-cart-item';
import { State } from '../../enum/state';
import { ViewMode } from '../../enum/view-mode';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
  // When using OnPush detectors, then the framework will check an OnPush
  // component when any of its input properties changes, when it fires
  // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsCardComponent implements OnInit {

  @Input() products: BaseCartItem[] | null = [];
  @Input() viewMode = ViewMode.GRID;
  @Input() loading: boolean | null = false;
  @Input() options: any = {
    showAddButton: true,
    showRemoveButton: false
  };
  @Output() clickAddToCart = new EventEmitter<BaseCartItem>();
  @Output() clickRemoveToCart = new EventEmitter<BaseCartItem>();

  viewModeTemplate = ViewMode;
  stateTemplate = State;

  constructor() { }

  ngOnInit(): void {
  }

  addCartProduct(product: BaseCartItem): void {
    this.clickAddToCart.emit(product);
  }

  removeCartProduct(product: BaseCartItem): void {
    this.clickRemoveToCart.emit(product);
  }

}
