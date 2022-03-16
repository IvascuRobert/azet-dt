import { LocaleFormat } from "../interface/locale-format";

/**
 * Converts a string into an object with all currency display options as properties.
 */
export function parseLocaleFormat(format: string): LocaleFormat {
  if (!format) {
    throw new Error('Invalid format for currency. Expected a non empty string');
  }
  const res: LocaleFormat = { currencyCode: undefined, display: 'symbol', digitsInfo: undefined, locale: undefined };
  const props: LocaleFormat = ['currencyCode', 'display', 'digitsInfo', 'locale'];
  const parts = format.split(':');
  const partsLength = parts.length;

  if (partsLength > 4) {
    throw new Error(`Invalid format for currency. Expected a value in the form ${props.join(':')} and got ${format}`);
  }

  parts.forEach((part, idx) => {
    let value: string | undefined = part;

    if (value === 'auto') {
      value = idx === 1 ? 'symbol' : undefined;
    }

    res[props[idx]] = value;
  });

  return res;
}
