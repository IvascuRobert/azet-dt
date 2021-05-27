import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { ProductClass } from 'src/app/shared/classes.class';

@Injectable({ providedIn: 'root' })
export class NgrxProductsService extends EntityCollectionServiceBase<ProductClass> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Products', serviceElementsFactory);
    }
}
