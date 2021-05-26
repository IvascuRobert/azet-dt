import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { ProductDataClass } from 'src/app/shared/classes.class';

@Injectable({ providedIn: 'root' })
export class ProductService extends EntityCollectionServiceBase<ProductDataClass> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Products', serviceElementsFactory);
    }
}
