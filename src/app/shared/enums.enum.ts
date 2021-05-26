export enum EnumEfficiency { // clasa aderenta
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
    NONE = '-'
}

export enum EnumTireCategory {
    Summer = 'SUMMER',
    Winter = 'WINTER',
    AllSeason = 'ALL_SEASON',
    Industrial = 'INDUSTRIAL',
    Truck = 'TRUCK',
    Forklift = 'FORKLIFT',
    Agriculture = 'AGRICULTURE',
}

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
    LOW_PRICE = 'lowPrice',
    RATING = 'rating',
}
