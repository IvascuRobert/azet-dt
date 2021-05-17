import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TrackByService } from 'src/app/core/services/trackBy.service';
import { EnumState, EnumViewMode } from 'src/app/shared/enums.enum';
import { ProductDataClass } from '../../shared/classes.class';

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

  @Input() products: ProductDataClass[];
  @Input() viewMode = EnumViewMode.GRID;

  currentRate = 4;
  viewModeTemplate = EnumViewMode;
  stateTemplate = EnumState;

  constructor(public trackbyService: TrackByService) { }

  ngOnInit(): void {
  }

  rateChange(event) {
    console.log(event);
  }

}
