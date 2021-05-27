import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgrxProductsService } from '../core/services/ngrx-products.service';
import { ProductClass } from '../shared/classes.class';
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
  product$: Observable<ProductClass[]>
  product: ProductClass;

  constructor(
    private route: ActivatedRoute,
    private ngrxProductsService: NgrxProductsService
  ) {
    this.product$ = this.ngrxProductsService.entities$;
    this.loading$ = this.ngrxProductsService.loading$;
  }

  ngOnInit(): void {
    const productId = this.route.parent.snapshot.params['id'];

    if (productId) {
      this.ngrxProductsService.getByKey(productId);
    }

    this.product$.subscribe((products: ProductClass[]) => {
      this.product = products[0];
    });

  }

  rateChange(event): void {
    console.log(event);
  }
}
