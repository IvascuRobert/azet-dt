import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { SortValue } from 'src/app/shared/enum/sort-value';
import { ViewMode } from 'src/app/shared/enum/view-mode';
import { DropdownValue } from 'src/app/shared/interface/dropdown-value';

@Component({
  selector: 'app-shop-products-sort',
  templateUrl: './shop-products-sort.component.html',
  styleUrls: ['./shop-products-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopProductsSortComponent implements OnInit {

  @Output() clickViewMode = new EventEmitter<ViewMode>();

  sorts: DropdownValue[] = [
    { value: SortValue.POPULAR, label: 'Cele mai populare' },
    { value: SortValue.NEWEST, label: 'Cele mai noi' },
    { value: SortValue.HIGH_PRICE, label: 'Preț crescător' },
    { value: SortValue.LOW_PRICE, label: 'Preț descrescător' }
  ];
  viewMode = ViewMode.GRID;
  templateViewMode = ViewMode;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.checkLocalStorageViewMode();
  }

  changeViewMode(value: any): void {
    // this.localStorageService.storeValue(value, EnumLocalStorageKeysName.SORT_VIEW);

    // if (value) {
    //   this.clickViewMode.emit(value);
    // }
  }

  checkLocalStorageViewMode(): void {
    // const localStorageSortView = this.localStorageService.getStorageValueByKey(EnumLocalStorageKeysName.SORT_VIEW);

    // if (localStorageSortView != null) {
    //   this.viewMode = localStorageSortView;
    //   this.changeViewMode(localStorageSortView);
    // }
  }
}
