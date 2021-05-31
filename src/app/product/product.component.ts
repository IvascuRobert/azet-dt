import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { NgrxProductsService } from '../core/services/ngrx-products.service';
import { ProductClass } from '../shared/classes.class';
import { EnumState } from '../shared/enums.enum';
import { pulseAnimation } from '../shared/pulse.animation';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [pulseAnimation({ anchor: 'pulse' })],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  stateTemplate = EnumState;
  loading$: Observable<boolean>;
  product$: Observable<ProductClass[]>

  constructor(
    private route: ActivatedRoute,
    private ngrxProductsService: NgrxProductsService,
    public cartService: CartService
  ) {
    this.product$ = this.ngrxProductsService.entities$;
    this.loading$ = this.ngrxProductsService.loading$;
  }

  ngOnInit(): void {
    const productId = this.route.parent.snapshot.params['id'];

    if (productId) {
      this.ngrxProductsService.getByKey(productId);
    }
  }

  addCartProduct(product: ProductClass) {
    this.cartService.addCartProduct(product);
  }

  rateChange(event): void {
    console.log(event);
  }
}
