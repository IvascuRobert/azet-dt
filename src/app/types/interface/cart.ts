import { Product } from './product';


export interface Cart {
  product: Product;
  quantity: number;
  user: string; // TO DO make use to be User interface
}
