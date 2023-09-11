import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { Price } from 'src/app/types/interface/price';
import { azDTFormatCurrency } from '../utils/utils';

@Pipe({ name: 'aztDtCurrency' })
export class AztDtCurrencyPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(
    price: Price,
    priceWithDiscount = false,
    priceWithoutTax = false,
    quantity: number = 0,
    currencyCode: string = 'lei ',
    digitsInfo: string = '1.2-2'
  ): string | null {
    let value = price.value;
    const { discount, taxPercentage } = price;

    if (priceWithDiscount && discount) {
      value = value - value * (discount / 100);
    }

    if (priceWithoutTax) {
      value = value - value * (taxPercentage / 100);
    }

    if (quantity) {
      value = value * quantity;
    }

    return azDTFormatCurrency(value, this.locale, currencyCode, digitsInfo);
  }
}
