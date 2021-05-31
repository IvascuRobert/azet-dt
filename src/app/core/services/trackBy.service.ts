import { Injectable } from '@angular/core';
import { CartProductClass, ProductClass } from 'src/app/shared/classes.class';

@Injectable()
export class TrackByService {

    product(index: number, product: ProductClass): string {
        return product.id;
    }

    cart(index: number, cartProduct: CartProductClass): string {
        return cartProduct.id;
    }
}
