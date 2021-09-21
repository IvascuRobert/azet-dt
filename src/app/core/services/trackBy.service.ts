import { Injectable } from '@angular/core';
import { CartProductClass, ProductClass } from 'src/app/shared/classes.class';

@Injectable()
export class TrackByService {

    product(product: ProductClass): string {
        return product.id;
    }

    cart(cartProduct: CartProductClass): string {
        return cartProduct.id;
    }

    trackByValue(payload: any): string {
        return payload.value;
    }
}
