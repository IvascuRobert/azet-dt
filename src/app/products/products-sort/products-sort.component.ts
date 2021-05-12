import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-sort',
  templateUrl: './products-sort.component.html',
  styleUrls: ['./products-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSortComponent implements OnInit {
  foods = [];

  constructor() { }

  ngOnInit(): void {
    this.foods = [
      { value: 'steak-0', label: 'Steak' },
      { value: 'pizza-1', label: 'Pizza' },
      { value: 'tacos-2', label: 'Tacos' }
    ];
  }

}
