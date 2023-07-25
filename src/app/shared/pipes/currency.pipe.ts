import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'azetDtCurrency' })
export class AzetDTCurrencyPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(
    value: number | null,
    tva?: boolean,
    discount?: number,
    showCurrency = false,
    currencyCode: string = 'lei ',
    digitsInfo: string = '1.2-2'
  ): string | null {
    if (value === null) {
      return '';
    }

    if (tva) {
      value = value - (value / 100) * 19;
    }

    const formatValue = formatCurrency(
      value,
      this.locale,
      '',
      currencyCode,
      digitsInfo
    );

    const currencySymbol = getCurrencySymbol(currencyCode, 'wide', this.locale);

    return showCurrency ? `${formatValue} ${currencySymbol}` : `${formatValue}`;
  }
}
