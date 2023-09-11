import { formatCurrency, getCurrencySymbol } from '@angular/common';

export function azDTFormatCurrency(
  value: number,
  locale: string,
  currencyCode: string,
  digitsInfo: string
): string {
  const splitFormatCurrency = formatCurrency(
    value,
    locale,
    getCurrencySymbol(currencyCode, 'narrow', locale),
    currencyCode,
    digitsInfo
  ).split(' ');

  return `${splitFormatCurrency[1]} ${splitFormatCurrency[0]}`;
}
