import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { ProductDataClass } from 'src/app/shared/classes.class';

@Injectable({ providedIn: 'root' })
export class CartService extends EntityCollectionServiceBase<ProductDataClass> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Cart', serviceElementsFactory);
    }
}
