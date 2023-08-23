import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'aztDtCurrency' })
export class AztDtCurrencyPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(
    value: number,
    currencyCode: string = 'lei ',
    digitsInfo: string = '1.2-2'
  ): string | null {
    const splitFormatCurrency = formatCurrency(
      value,
      this.locale,
      getCurrencySymbol(currencyCode, 'narrow', this.locale),
      currencyCode,
      digitsInfo
    ).split(' ');

    return `${splitFormatCurrency[1]} ${splitFormatCurrency[0]}`;
  }
}
