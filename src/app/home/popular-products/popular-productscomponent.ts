import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductDataClass } from 'src/app/shared/classes.class';
import { EnumState } from 'src/app/shared/enums.enum';
import { productsMock } from 'src/app/shared/mocks';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularProductsComponent implements OnInit {
  products: ProductDataClass[] = productsMock.slice(0, 4);
  stateTemplate = EnumState;

  constructor() { }

  ngOnInit(): void {
  }

}
