import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { ProductClass } from 'src/app/shared/classes.class';
import { EnumLocalStorageKeysName } from 'src/app/shared/enums.enum';
import { ICart } from 'src/app/shared/interfaces.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class CartService {

    constructor(
        private _snackBar: MatSnackBar,
        private localStorageService: LocalStorageService
    ) { }
    products: ProductClass[] = []

    cartProducts$ = new BehaviorSubject<ICart>({
        products: [],
        totalProducts: 0,
        totalPrice: 0
    });

    addCartProduct(productAdded: ProductClass): BehaviorSubject<ICart> {
        this.products.push(productAdded);

        this.localStorageService.storeValue(JSON.stringify(this.products), EnumLocalStorageKeysName.PRODUCTS);

        const cartProducts = this.transformProductsToCart(this.products);

        this.cartProducts$.next(cartProducts);

        this._snackBar.open('A fost adăugată o anvelopă în coș!', 'Închide', {
            duration: 2000,
        });

        return this.cartProducts$;
    }

    removeCartProduct(productRemoved: ProductClass): BehaviorSubject<ICart> {
        const findIndexOfProductRemoved = this.products.findIndex((product) => product.id === productRemoved.id);

        this.products.splice(findIndexOfProductRemoved, 1);

        this.localStorageService.storeValue(JSON.stringify(this.products), EnumLocalStorageKeysName.PRODUCTS);

        const cartProducts = this.transformProductsToCart(this.products);

        this.cartProducts$.next(cartProducts);

        this._snackBar.open('A fost scosă o anvelopă din coș!', 'Închide', {
            duration: 2000,
        });

        return this.cartProducts$;
    }

    setCartProducts(products: ProductClass[]): BehaviorSubject<ICart> {
        this.products = products;

        const cartProducts = this.transformProductsToCart(this.products);

        this.cartProducts$.next(cartProducts);

        return this.cartProducts$;
    }

    transformProductsToCart(products: ProductClass[]): ICart {
        let cartProducts: ICart = {
            products: [],
            totalProducts: 0,
            totalPrice: 0
        };

        cartProducts.totalProducts = products.length;
        cartProducts.totalPrice = products.reduce((acc, val) => {
            if (val && val.price) {
                return acc + val.price;
            } else {
                return acc;
            }
        }, 0);

        const groupedProductsById = this.groupBy(products, 'id');
        const uniqueProducts: ProductClass[] = products.filter((v, i, a) => a.indexOf(v) === i);

        for (let product of uniqueProducts) {
            const { id } = product;
            const nbOfSameProducts = groupedProductsById[id].length;
            cartProducts.products.push({ ...product, nbOfProducts: nbOfSameProducts })
        }

        return cartProducts;
    }

    groupBy<ProductClass, K extends keyof ProductClass>(data: ProductClass[], propertyName: K): { [key: string]: ProductClass[] } {
        // `data` is an array of objects, `key` is the key (or property accessor) to group by
        // reduce runs this anonymous function on each element of `data` (the `item` parameter,
        // returning the `storage` parameter at the end
        return data.reduce((storage: any, item) => {
            // get the first instance of the key by which we're grouping
            const group = item[propertyName];

            // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
            storage[group] = storage[group] || [];

            // add this item to its group within `storage`
            storage[group].push(item);

            // return the updated storage to the reduce function, which will then loop through the next 
            return storage;
        }, {}); // {} is the initial value of the storage
    };
}