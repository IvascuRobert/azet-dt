import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from 'src/app/types/interface/cart';

@Pipe({
  name: 'countTotalProducts',
})
export class CountTotalProductsPipe implements PipeTransform {
  transform(cart: Cart[]): number {
    let totalProducts = 0;

    for (const cartValue of cart) {
      totalProducts += cartValue.quantity;
    }

    return totalProducts;
  }
}
