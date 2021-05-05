import { Injectable } from '@angular/core';
import { ProductDataClass } from 'src/app/shared/classes.class';

@Injectable()
export class TrackByService {

    product(index: number, product: ProductDataClass) {
        return product.id;
    }
}