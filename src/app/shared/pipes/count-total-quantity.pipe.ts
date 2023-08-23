import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from 'src/app/types/interface/cart';

@Pipe({
  name: 'countTotalQuantity',
  pure: false
})
export class CountTotalQuantityPipe implements PipeTransform {
  transform(cart: Cart[]): number {
    let totalQuantity = 0;

    for (const cartValue of cart) {
      totalQuantity += cartValue.quantity;
    }

    return totalQuantity;
  }
}
