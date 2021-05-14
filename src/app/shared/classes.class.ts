import { EnumCarCategory, EnumFuelEfficiency, EnumStock, EnumTireCategory, EnumWeatherEfficiency } from "./enums.enum";
import { ISize } from "./interfaces.interface";

export class ProductDataClass {
    id: number;
    name: string;
    description: string;
    producer: string;
    price: number;
    quantity: number;
    dot: number;
    size: ISize;
    review: number;
    guarantee: number;
    weatherEfficiency: EnumWeatherEfficiency;
    season: EnumTireCategory;
    noiseLevel: number;
    profile: string;
    image?: string;
    carCategory: EnumCarCategory;
    fuelEfficiency: EnumFuelEfficiency;
    stock: EnumStock

    // Normal signature with defaults
    constructor(
        id = null,
        name = '',
        description = '',
        producer = '',
        price = null,
        quantity = null,
        dot = null,
        size: {
            width: null,
            crossSection: null,
            diameter: null,
            loadOrSpeed: null
        },
        review = null,
        guarantee = null,
        weatherEfficiency = null,
        season = null,
        noiseLevel = null,
        profile = '',
        image = '',
        carCategory = null,
        fuelEfficiency = null,
        stock = null,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.producer = producer;
        this.price = price;
        this.quantity = quantity;
        this.dot = dot;
        this.size = {
            width: size.width,
            crossSection: size.crossSection,
            diameter: size.diameter,
            loadOrSpeed: size.loadOrSpeed
        };
        this.review = review;
        this.guarantee = guarantee;
        this.weatherEfficiency = weatherEfficiency;
        this.season = season;
        this.noiseLevel = noiseLevel;
        this.profile = profile;
        this.image = image;
        this.carCategory = carCategory;
        this.fuelEfficiency = fuelEfficiency;
        this.stock = stock;
    }
}