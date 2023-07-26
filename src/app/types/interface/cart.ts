import { Product } from './product';
import { User } from './user-login';

export interface Cart {
  product: Product;
  quantity: number;
  price: number;
  user: string; // TO DO make use to be User interface
}
