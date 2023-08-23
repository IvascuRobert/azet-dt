import { Price } from './price';

export interface Product {
  id: number;
  weather: string;
  name: string;
  brand: string;
  vehicleType: string[];
  price: Price;
  description?: string;
  pictureSrc?: string;
  width: string;
  height: string;
  diameter: string;
  profile: string;
  stock: number;
}
