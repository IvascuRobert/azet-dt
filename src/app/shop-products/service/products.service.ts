import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { BaseCartItem } from 'src/app/shared/class/base-cart-item';

@Injectable({ providedIn: 'root' })
export class ProductsService extends EntityCollectionServiceBase<BaseCartItem> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Products', serviceElementsFactory);
  }
}
