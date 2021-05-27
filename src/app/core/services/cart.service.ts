import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { map, scan, shareReplay, startWith, tap, withLatestFrom } from 'rxjs/operators';
import { CartClass, ProductClass } from 'src/app/shared/classes.class';
import { ICartStateTree, ICartTotals } from 'src/app/shared/interfaces.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CartService {
    /**
     * Main Observables
     * 
     */
    private stateTree$ = new BehaviorSubject<ICartStateTree>(null);
    private checkoutTrigger$ = new BehaviorSubject<boolean>(false);
    private cartAdd$ = new Subject<CartClass>();
    private cartRemove$ = new Subject<CartClass>();

    private get cart$(): Observable<CartClass[]> {
        return merge(this.cartAdd$, this.cartRemove$).pipe(
            startWith([]),
            scan((acc: CartClass[], item: CartClass) => {
                if (item) {
                    if (item.remove) {
                        return [...acc.filter(i => i.uuid !== item.uuid)];
                    }
                    return [...acc, item];
                }
            })
        );
    }

    /**
     * Main Shopping Cart StateTree
     * Combines all dependencies and maps then to the StateTree Object 
     */
    state$: Observable<ICartStateTree> = this.stateTree$.pipe(
        withLatestFrom([this.total$, this.checkoutTrigger$]),
        map(([cart, tot, checkout]: any) => ({ cart, tot, checkout })),
        tap(state => {
            if (state.checkout) {
                console.log('checkout', state);
            }
        }),
        // make sure we share to the world! or just the entire app
        shareReplay(1)
    );

    /**
     * Calcs all Totals from being piped through the cart Observable
     * When an item gets added or removed it will automatically calc
     */
    private get total$(): Observable<ICartTotals> {
        return this.cart$.pipe(
            map(items => {
                let total = 0;
                for (const i of items) {
                    total += i.price;
                }
                return total;
            }),
            map(cost => ({
                subTot: cost,
                tax: .034 * cost,
                grandTot: .034 * cost + cost
            })
            )
        );
    }

    // facade for next of cartAdd subject
    addCartItem(item: ProductClass): CartClass {
        const cartItem: CartClass = { ...item, uuid: uuid() };
        this.cartAdd$.next(cartItem);

        return cartItem
    }
    // facade for next of cartRemove subject
    removeCartItem(item: CartClass): CartClass {
        const cartItem: CartClass = { ...item, remove: true };
        this.cartRemove$.next({ ...item, remove: true });

        return cartItem;
    }
}