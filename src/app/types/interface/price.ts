export interface Price {
  value: number; // price without tax
  withTax: number; // value + (value * taxPercentage / 100)
  withDiscount?: number; // value - (value * discount/100)
  withDiscountWithTax?: number; // value - (value * discount/100) + (value * taxPercentage / 100)
  taxPercentage: 19;
  discount?: number;
}
