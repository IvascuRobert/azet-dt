import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from 'src/app/types/interface/cart';

@Pipe({
  name: 'countTotalDiscount',
  pure: false,
})
export class CountTotalDiscountPipe implements PipeTransform {
  transform(cart: Cart[], withTax: boolean = true): number {
    let totalDiscount = 0;

    for (const cartValue of cart) {
      if (
        cartValue.product.price.discount &&
        cartValue.product.price.withDiscountWithTax
      ) {
        totalDiscount +=
          cartValue.product.price.withDiscountWithTax * cartValue.quantity;
      }
    }

    return totalDiscount;
  }
}
