import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductClass } from 'src/app/shared/classes.class';
import { ICartAll } from 'src/app/shared/interfaces.interface';

@Injectable()
export class CartService {
    products: ProductClass[] = []

    cartProducts$ = new BehaviorSubject<ICartAll>({
        products: [],
        totals: 0
    });

    addCartProduct(productAdded: ProductClass): void {
        // let cartProducts: ICartAll;
        this.products.push(productAdded);

        this.products.reduce((previousProduct, currentProduct, index: number, array) => {
            console.log(previousProduct, 'previousProduct')
            console.log(currentProduct, 'currentProduct')
            console.log(index, 'index')
            console.log(array, 'array')


            return array;
        }, {})

        // this.cartProducts$.next();

        // return cartProduct
    }

    // removeCartProduct(item: CartProductClass): CartProductClass {
    //     const cartProduct: CartProductClass = { ...item, remove: true };
    //     this.cartRemove$.next({ ...item, remove: true });

    //     return cartProduct;
    // }
}