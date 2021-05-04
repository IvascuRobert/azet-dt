import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IProductData } from '../interfaces';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProductData = null;

  constructor() { }

  ngOnInit(): void {
  }

}
