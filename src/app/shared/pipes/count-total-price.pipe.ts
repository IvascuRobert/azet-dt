import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from 'src/app/types/interface/cart';

@Pipe({
  name: 'countTotalPrice',
  pure: false,
})
export class CountTotalPricePipe implements PipeTransform {
  transform(cart: Cart[]): number {
    let totalPrice = 0;

    for (const cartValue of cart) {
      if (cartValue.product.discount) {
        totalPrice +=
          (cartValue.product.price -
            (cartValue.product.price * cartValue.product.discount) / 100) *
          cartValue.quantity;
      } else {
        totalPrice += cartValue.product.price * cartValue.quantity;
      }
    }

    return totalPrice;
  }
}
