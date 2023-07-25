export interface Product {
  id: number;
  weather: string;
  name: string;
  brand: string;
  vehicleType: string[];
  price: number;
  discount?: number;
  description?: string;
  pictureSrc?: string;
  width: string;
  height: string;
  diameter: string;
  profile: string;
}
