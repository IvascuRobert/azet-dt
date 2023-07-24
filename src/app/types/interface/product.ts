export interface Product {
  id: number;
  weather: string;
  name: string;
  brand: string;
  type: string[];
  price: number;
  discount?: number;
}
