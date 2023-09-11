import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from 'src/app/types/interface/cart';

@Pipe({
  name: 'countTotalTax',
  pure: false,
})
export class CountTotalTaxPipe implements PipeTransform {
  transform(cart: Cart[], withTax: boolean = true): number {
    let totalPrice = 0;

    if (withTax) {
      for (const cartValue of cart) {
        if (
          cartValue.product.price.discount &&
          cartValue.product.price.value
        ) {
          totalPrice +=
            cartValue.product.price.value * cartValue.quantity;
        } else {
          totalPrice += cartValue.product.price.value * cartValue.quantity;
        }
      }
    } else {
      for (const cartValue of cart) {
        if (
          cartValue.product.price.discount &&
          cartValue.product.price.value
        ) {
          totalPrice +=
            cartValue.product.price.value * cartValue.quantity;
        } else {
          totalPrice += cartValue.product.price.value * cartValue.quantity;
        }
      }
    }

    return totalPrice;
  }
}
