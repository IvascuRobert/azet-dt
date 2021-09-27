export enum EnumCarCategory {
    Micro = 'Micro',
    Sedan = 'Sedan',
    CUV = 'CUV',
    SUV = 'SUV',
    Hatchback = 'Hatchback',
    Roadster = 'Roadster',
    Pickup = 'Pickup',
    Van = 'Van',
    Coupe = 'Coupe',
    SuperCar = 'SuperCar',
    CamperVAN = 'CamperVAN',
    MiniTruck = 'MiniTruck',
    Cabriolet = 'Cabriolet',
    MiniVAN = 'MiniVAN',
    Truck = 'Truck',
    BigTruck = 'BigTruck',
}

export enum EnumPriceRange {
    UNDER100 = '<100',
    BETWEEN100_250 = '>100&<250',
    BETWEEN250_500 = '>250&<500',
    BETWEEN500_1000 = '>500&<1000',
    OVER1000 = '>1000'
}

export enum EnumState {
    STOCK = 'STOCK',
    COMMAND = 'COMMAND',
}

export enum EnumViewMode {
    GRID = 'grid',
    LIST = 'list'
}

export enum EnumSortValue {
    POPULAR = 'popular',
    NEWEST = 'newest',
    HIGH_PRICE = 'highPrice',
    LOW_PRICE = 'lowPrice'
}

export enum EnumMessageType {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    DANGER = 'danger'
}

export enum EnumLocalStorageKeysName {
    ACCESS_TOKEN = 'azet-dt:access_token',
    PRODUCTS = 'azet-dt:products',
    THEME = 'azet-dt:theme_dark_mode'
}