import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EnumSortValue, EnumViewMode } from 'src/app/shared/enums.enum';
import { ISelect } from 'src/app/shared/interfaces.interface';

@Component({
  selector: 'app-products-sort',
  templateUrl: './products-sort.component.html',
  styleUrls: ['./products-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSortComponent implements OnInit {

  @Output() clickViewMode = new EventEmitter<string>();

  sorts: ISelect[] = [];
  viewMode = EnumViewMode;

  constructor() { }

  ngOnInit(): void {
    this.sorts = [
      { value: EnumSortValue.POPULAR, label: 'Cele mai populare' },
      { value: EnumSortValue.NEWEST, label: 'Cele mai noi' },
      { value: EnumSortValue.HIGH_PRICE, label: 'Preț crescător' },
      { value: EnumSortValue.LOW_PRICE, label: 'Preț descrescător' },
      { value: EnumSortValue.RATING, label: 'Rating' },
    ];
  }

  changeViewMode(event): void {
    const { value } = event;

    if (value) {
      this.clickViewMode.emit(value);
    }
  }

}
