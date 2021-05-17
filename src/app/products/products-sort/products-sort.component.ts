import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EnumViewMode } from 'src/app/shared/enums.enum';

@Component({
  selector: 'app-products-sort',
  templateUrl: './products-sort.component.html',
  styleUrls: ['./products-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSortComponent implements OnInit {

  @Output() onViewMode = new EventEmitter<string>();

  foods = [];
  viewMode = EnumViewMode;

  constructor() { }

  ngOnInit(): void {
    this.foods = [
      { value: 'steak-0', label: 'Steak' },
      { value: 'pizza-1', label: 'Pizza' },
      { value: 'tacos-2', label: 'Tacos' }
    ];
  }

  changeViewMode(event) {
    const { value } = event;

    if (value) {
      this.onViewMode.emit(value);
    }
  }

}
