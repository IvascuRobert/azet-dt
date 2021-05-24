import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../core/services/products.service';
import { ProductDataClass } from '../shared/classes.class';
import { EnumState } from '../shared/enums.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  stateTemplate = EnumState;
  loading$: Observable<boolean>;
  product$: Observable<ProductDataClass[]>
  product: ProductDataClass;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.product$ = this.productsService.entities$;
    this.loading$ = this.productsService.loading$;
  }

  ngOnInit(): void {
    const productId = this.route.parent.snapshot.params['id'];

    if (productId) {
      this.productsService.getByKey(productId);
    }

    this.product$.subscribe((products: ProductDataClass[]) => {
      this.product = products[0];
    });

  }

  rateChange(event): void {
    console.log(event);
  }
}
