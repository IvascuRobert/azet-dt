export interface Price {
  value: number; // price without tax
  withTax: number;
  withDiscount?: number; // price with discount without tax
  withDiscountWithTax?: number;
  taxPercentage: 19;
  discount?: number;
}
