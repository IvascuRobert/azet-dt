import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'azetDtCurrency' })
export class AzetDTCurrencyPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(
    value: number | null,
    tva?: boolean,
    currencyCode: string = 'lei ',
    display: 'code' | 'symbol' | 'symbol-narrow' | string | boolean = 'symbol',
    digitsInfo: string = '1.2-2'
  ): string | null {
    if (value != null) {
      if (tva) {
        value = value - (value / 100) * 19;
      }

      return formatCurrency(
        value,
        this.locale,
        getCurrencySymbol(currencyCode, 'wide', this.locale),
        currencyCode,
        digitsInfo
      );
    }

    return '';
  }
}
