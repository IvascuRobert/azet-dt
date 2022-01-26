import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { EnumLocalStorageKeysName, EnumSortValue, EnumViewMode } from 'src/app/shared/enums.enum';
import { ISelect } from 'src/app/shared/interfaces.interface';

@Component({
  selector: 'app-shop-products-sort',
  templateUrl: './shop-products-sort.component.html',
  styleUrls: ['./shop-products-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopProductsSortComponent implements OnInit {

  @Output() clickViewMode = new EventEmitter<EnumViewMode>();

  sorts: ISelect[] = [
    { value: EnumSortValue.POPULAR, label: 'Cele mai populare' },
    { value: EnumSortValue.NEWEST, label: 'Cele mai noi' },
    { value: EnumSortValue.HIGH_PRICE, label: 'Preț crescător' },
    { value: EnumSortValue.LOW_PRICE, label: 'Preț descrescător' }
  ];
  viewMode = EnumViewMode.GRID;
  templateViewMode = EnumViewMode;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.checkLocalStorageViewMode();
  }

  changeViewMode(value: any): void {
    this.localStorageService.storeValue(value, EnumLocalStorageKeysName.SORT_VIEW);

    if (value) {
      this.clickViewMode.emit(value);
    }
  }

  checkLocalStorageViewMode(): void {
    const localStorageSortView = this.localStorageService.getStorageValueByKey(EnumLocalStorageKeysName.SORT_VIEW);

    if (localStorageSortView != null) {
      this.viewMode = localStorageSortView;
      this.changeViewMode(localStorageSortView);
    }
  }
}
