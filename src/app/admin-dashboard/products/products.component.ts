import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProductClass } from 'src/app/shared/classes.class';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  @Input() products: ProductClass[] = [];
  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
