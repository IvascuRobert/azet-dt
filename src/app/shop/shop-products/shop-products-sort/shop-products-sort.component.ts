import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EnumSortValue, EnumViewMode } from 'src/app/shared/enums.enum';
import { ISelect } from 'src/app/shared/interfaces.interface';

@Component({
  selector: 'app-shop-products-sort',
  templateUrl: './shop-products-sort.component.html',
  styleUrls: ['./shop-products-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopProductsSortComponent implements OnInit {

  @Output() clickViewMode = new EventEmitter<string>();

  sorts: ISelect[] = [];
  viewMode = EnumViewMode;

  constructor() { }

  ngOnInit(): void {
    this.sorts = [
      { value: EnumSortValue.POPULAR, label: 'Cele mai populare' },
      { value: EnumSortValue.NEWEST, label: 'Cele mai noi' },
      { value: EnumSortValue.HIGH_PRICE, label: 'Preț crescător' },
      { value: EnumSortValue.LOW_PRICE, label: 'Preț descrescător' }
    ];
  }

  changeViewMode(event): void {
    const { value } = event;

    if (value) {
      this.clickViewMode.emit(value);
    }
  }

}
