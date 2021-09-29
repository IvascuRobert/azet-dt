import { EnumCarCategory, EnumState } from './enums.enum';

export class ProductClass {
    id: string;
    name: string;
    description?: string;
    producer: string;
    price: number | null;
    quantity: number | null;
    size: string;
    profile: string;
    image?: string;
    carCategories: EnumCarCategory[] | null;
    state: EnumState | null;

    // Normal signature with defaults
    constructor(
        id = '',
        name = '',
        description = '',
        producer = '',
        price = null,
        quantity = null,
        size = '',
        profile = '',
        image = '',
        carCategories = null,
        state = null,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.producer = producer;
        this.price = price;
        this.quantity = quantity;
        this.size = size;
        this.profile = profile;
        this.image = image;
        this.carCategories = carCategories;
        this.state = state;
    }
}

export class CartProductClass extends ProductClass {
    nbOfProducts: number | null;

    constructor(
        id = '',
        name = '',
        description = '',
        producer = '',
        price = null,
        quantity = null,
        size = '',
        profile = '',
        image = '',
        carCategories = null,
        state = null,
        nbOfProducts = null
    ) {
        super(id, name, description, producer, price, quantity, size, profile, image, carCategories, state);
        this.nbOfProducts = nbOfProducts;
    }
}
