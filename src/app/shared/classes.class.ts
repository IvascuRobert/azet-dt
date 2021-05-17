import { EnumCarCategory, EnumEfficiency, EnumState, EnumTireCategory } from "./enums.enum";

export class ProductDataClass {
    id: number;
    name: string;
    description: string;
    producer: string;
    price: number;
    quantity: number;
    dot: number;
    size: string;
    rate: number;
    guarantee: number;
    weatherEfficiency: EnumEfficiency;
    season: EnumTireCategory;
    noiseLevel: number;
    profile: string;
    image?: string;
    carsCategories: EnumCarCategory[];
    fuelEfficiency: EnumEfficiency;
    state: EnumState

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
        carsCategories = null,
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
        this.carsCategories = carsCategories;
        this.fuelEfficiency = fuelEfficiency;
        this.state = state;
    }
}