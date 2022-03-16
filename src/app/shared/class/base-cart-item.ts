import { CarCategory } from '../enum/car-category';
import { State } from '../enum/state';
import { CartItem } from './cart-item';

export class BaseCartItem extends CartItem {
  id: any;
  name: string;
  price: number;
  image: string;
  quantity: number;
  data: any;
  description?: string;
  producer: string;
  size: string;
  profile: string;
  carCategories: CarCategory[] | null;
  state: State | null;
  createDate: Date;
  updateDate: Date;
  shippingMethod: string;

  constructor(itemData: any = {}) {
    super();
    this.id = itemData.id || 0;
    this.name = itemData.name || '';
    this.price = itemData.price || 0;
    this.image = itemData.image || '';
    this.quantity = itemData.quantity || 1;
    this.data = itemData.data || {};
    this.description = itemData.description || '';
    this.producer = itemData.producer || '';
    this.size = itemData.size || '';
    this.profile = itemData.profile || '';
    this.carCategories = itemData.carCategories || null;
    this.state = itemData.state || null;
    this.createDate = itemData.createDate;
    this.updateDate = itemData.updateDate;
    this.shippingMethod = itemData.shippingMethod;
  }

  getId(): any {
    return this.id;
  }

  setId(id: any): void {
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getQuantity(): number {
    return this.quantity;
  }

  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  getImage(): string {
    return this.image;
  }

  setImage(image: string): void {
    this.image = image;
  }

  getData(): any {
    return this.data;
  }

  setData(data: any): void {
    this.data = data;
  }
}