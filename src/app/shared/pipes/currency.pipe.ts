import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({ name: 'azetDtCurrency' })
export class AzetDTCurrencyPipe implements PipeTransform {
    @memo()
    transform(
        value: number | null,
        currencyCode: string = 'Lei',
        display:
            | 'code'
            | 'symbol'
            | 'symbol-narrow'
            | string
            | boolean = 'symbol',
        digitsInfo: string = '3.2-2',
        locale: string = 'ro',
    ): string | null {

        if (value != null) {
            return formatCurrency(
                value,
                locale,
                getCurrencySymbol(currencyCode, 'wide'),
                currencyCode,
                digitsInfo,
            );
        }

        return '';
    }
}