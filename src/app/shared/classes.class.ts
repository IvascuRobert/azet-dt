import { EnumCarCategory, EnumEfficiency, EnumState, EnumTireCategory } from './enums.enum';
import { IReview } from './interfaces.interface';

export class ProductClass {
    id: string;
    name: string;
    description?: string;
    producer: string;
    price: number;
    quantity: number;
    dot: number;
    size: string;
    rate?: number;
    reviews?: IReview[];
    guarantee?: number;
    weatherEfficiency?: EnumEfficiency;
    season: EnumTireCategory;
    noiseLevel?: number;
    profile: string;
    image?: string;
    carCategories: EnumCarCategory[];
    fuelEfficiency?: EnumEfficiency;
    state: EnumState;

    // Normal signature with defaults
    constructor(
        id = null,
        name = '',
        description = '',
        producer = '',
        price = null,
        quantity = null,
        dot = null,
        size = '',
        rate = null,
        guarantee = null,
        weatherEfficiency = null,
        season = null,
        noiseLevel = null,
        profile = '',
        image = '',
        carCategories = null,
        fuelEfficiency = null,
        state = null,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.producer = producer;
        this.price = price;
        this.quantity = quantity;
        this.dot = dot;
        this.size = size;
        this.rate = rate;
        this.guarantee = guarantee;
        this.weatherEfficiency = weatherEfficiency;
        this.season = season;
        this.noiseLevel = noiseLevel;
        this.profile = profile;
        this.image = image;
        this.carCategories = carCategories;
        this.fuelEfficiency = fuelEfficiency;
        this.state = state;
    }
}

export class CartProductClass extends ProductClass {
    nbOfItems: number;
}
