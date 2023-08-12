import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currency' })
export class CurrencyPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(
    price: number | null,
    tva?: boolean,
    discount?: number,
    showCurrency = false,
    currencyCode: string = 'lei ',
    digitsInfo: string = '1.2-2'
  ): string | null {
    if (price === null) {
      return '';
    }

    if (discount) {
      price = price - (price / 100) * discount;
    }

    if (tva) {
      price = price - (price / 100) * 19;
    }

    const formatValue = formatCurrency(
      price,
      this.locale,
      '',
      currencyCode,
      digitsInfo
    );

    const currencySymbol = getCurrencySymbol(currencyCode, 'wide', this.locale);

    return showCurrency ? `${formatValue} ${currencySymbol}` : `${formatValue}`;
  }
}
