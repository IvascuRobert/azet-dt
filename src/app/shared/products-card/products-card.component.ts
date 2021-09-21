import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrackByService } from 'src/app/core/services/trackBy.service';
import { EnumState, EnumViewMode } from 'src/app/shared/enums.enum';
import { ProductClass } from '../../shared/classes.class';

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

  @Input() products: ProductClass[];
  @Input() viewMode = EnumViewMode.GRID;
  @Input() loading: boolean = false;
  @Output() clickAddToCart = new EventEmitter<ProductClass>();

  viewModeTemplate = EnumViewMode;
  stateTemplate = EnumState;

  constructor(public trackByService: TrackByService) { }

  ngOnInit(): void {
  }

  addCartProduct(product: ProductClass): void {
    this.clickAddToCart.emit(product);
  }

}
