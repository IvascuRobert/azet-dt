import { Component, OnInit } from '@angular/core';
import { ProductDataClass } from '../shared/classes.class';
import { EnumViewMode } from '../shared/enums.enum';
import { productsMock } from '../shared/mocks';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductDataClass[] = productsMock;
  viewMode = EnumViewMode.GRID;

  constructor() { }

  ngOnInit(): void { }

  changeViewMode(viewMode): void {
    this.viewMode = viewMode;
  }

}
