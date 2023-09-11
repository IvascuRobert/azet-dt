import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { Cart } from 'src/app/types/interface/cart';
import { azDTFormatCurrency } from '../utils/utils';

@Pipe({
  name: 'countTotalPrice',
  pure: false,
})
export class CountTotalPricePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(
    cart: Cart[],
    priceWithoutTax = false,
    currencyCode: string = 'lei ',
    digitsInfo: string = '1.2-2'
  ): string | null {
    let totalPrice = 0;
    console.log({ cart });
    for (const cartValue of cart) {
      const discount = cartValue.product.price.discount;
      const taxPercentage = cartValue.product.price.taxPercentage;
      const value = cartValue.product.price.value;
      const quantity = cartValue.quantity;

      if (priceWithoutTax) {
        if (discount && value) {
          totalPrice +=
            (value - (value * discount) / 100 - (value * taxPercentage) / 100) *
            quantity;
        } else {
          totalPrice += (value - (value * taxPercentage) / 100) * quantity;
        }
      } else {
        if (discount && value) {
          totalPrice += (value - (value * discount) / 100) * quantity;
        } else {
          totalPrice += value * quantity;
        }
      }
    }

    return azDTFormatCurrency(
      totalPrice,
      this.locale,
      currencyCode,
      digitsInfo
    );
  }
}
