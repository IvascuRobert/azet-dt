import { Component, OnInit } from '@angular/core';
import { ProductDataClass } from '../shared/classes.class';
import { productsMock } from '../shared/mocks';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductDataClass[] = productsMock;

  constructor() { }

  ngOnInit(): void { }

}
