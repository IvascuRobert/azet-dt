import { Injectable } from '@angular/core';
import { ProductClass } from 'src/app/shared/classes.class';

@Injectable()
export class TrackByService {

    product(index: number, product: ProductClass): string {
        return product.id;
    }
}
