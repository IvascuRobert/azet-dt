import { Observable, of } from "rxjs";
import { ProductDataClass } from "./classes.class";
import { EnumCarCategory, EnumFuelEfficiency, EnumPriceRange, EnumStock, EnumTireCategory, EnumWeatherEfficiency } from "./enums.enum";
import { IFilterNode } from "./interfaces.interface";
export class MockDataService {
    constructor() { }

    getProducts(): Observable<ProductDataClass[]> {
        return of(productsMock);
    }
}

export const productsMock: ProductDataClass[] = [{
    id: 1,
    name: 'Dunlop 175/65 R15 Fast Respone 84H',
    description: 'ContiSeal™ is a technology developed by Continental designed to seal a damaged tire tread. In case of penetration by foreign objects such as nails, there is no need for immediate roadside tire changes, and holes remain sealed even if the puncturing object becomes dislodged. ContiSeal™ is a sticky, viscous sealant layer. It is applied to the inside of the tire in the tread area. ContiSeal™ seals 80% of all tire punctures and therefore reduces the risk of flat tires. ContiSeal™ tires are marked clearly with a symbol on the sidewall and are compatible with all commonly available rims.',
    producer: 'Continental',
    price: 200,
    quantity: 4,
    dot: 2020,
    size: {
        width: 20,
        crossSection: 15,
        diameter: 30,
        loadOrSpeed: 86
    },
    review: 3,
    guarantee: 24,
    weatherEfficiency: EnumWeatherEfficiency.A,
    season: EnumTireCategory.Winter,
    noiseLevel: 68,
    profile: 'FastRespone 84H',
    image: '',
    carCategory: EnumCarCategory.CamperVAN,
    fuelEfficiency: EnumFuelEfficiency.F,
    stock: EnumStock.STOCK
}, {
    id: 2,
    name: 'Dunlop 175/65 R15 Fast Respone 84H',
    description: 'ContiSeal™ is a technology developed by Continental designed to seal a damaged tire tread. In case of penetration by foreign objects such as nails, there is no need for immediate roadside tire changes, and holes remain sealed even if the puncturing object becomes dislodged. ContiSeal™ is a sticky, viscous sealant layer. It is applied to the inside of the tire in the tread area. ContiSeal™ seals 80% of all tire punctures and therefore reduces the risk of flat tires. ContiSeal™ tires are marked clearly with a symbol on the sidewall and are compatible with all commonly available rims.',
    producer: 'Continental',
    price: 200,
    quantity: 4,
    dot: 2020,
    size: {
        width: 20,
        crossSection: 15,
        diameter: 30,
        loadOrSpeed: 86
    },
    review: 3,
    guarantee: 24,
    weatherEfficiency: EnumWeatherEfficiency.G,
    season: EnumTireCategory.AllSeason,
    noiseLevel: 68,
    profile: 'FastRespone 84H',
    image: '',
    carCategory: EnumCarCategory.Coupe,
    fuelEfficiency: EnumFuelEfficiency.D,
    stock: EnumStock.COMMAND
}, {
    id: 3,
    name: 'Dunlop 175/65 R15 Fast Respone 84H',
    description: 'ContiSeal™ is a technology developed by Continental designed to seal a damaged tire tread. In case of penetration by foreign objects such as nails, there is no need for immediate roadside tire changes, and holes remain sealed even if the puncturing object becomes dislodged. ContiSeal™ is a sticky, viscous sealant layer. It is applied to the inside of the tire in the tread area. ContiSeal™ seals 80% of all tire punctures and therefore reduces the risk of flat tires. ContiSeal™ tires are marked clearly with a symbol on the sidewall and are compatible with all commonly available rims.',
    producer: 'Continental',
    price: 200,
    quantity: 4,
    dot: 2020,
    size: {
        width: 20,
        crossSection: 15,
        diameter: 30,
        loadOrSpeed: 86
    },
    review: 3,
    guarantee: 24,
    weatherEfficiency: EnumWeatherEfficiency.B,
    season: EnumTireCategory.Summer,
    noiseLevel: 68,
    profile: 'FastRespone 84H',
    image: '',
    carCategory: EnumCarCategory.Coupe,
    fuelEfficiency: EnumFuelEfficiency.C,
    stock: EnumStock.COMMAND
}, {
    id: 4,
    name: 'Dunlop 175/65 R15 Fast Respone 84H',
    description: 'ContiSeal™ is a technology developed by Continental designed to seal a damaged tire tread. In case of penetration by foreign objects such as nails, there is no need for immediate roadside tire changes, and holes remain sealed even if the puncturing object becomes dislodged. ContiSeal™ is a sticky, viscous sealant layer. It is applied to the inside of the tire in the tread area. ContiSeal™ seals 80% of all tire punctures and therefore reduces the risk of flat tires. ContiSeal™ tires are marked clearly with a symbol on the sidewall and are compatible with all commonly available rims.',
    producer: 'Continental',
    price: 200,
    quantity: 4,
    dot: 2020,
    size: {
        width: 20,
        crossSection: 15,
        diameter: 30,
        loadOrSpeed: 86
    },
    review: 3,
    guarantee: 24,
    weatherEfficiency: EnumWeatherEfficiency.C,
    season: EnumTireCategory.Summer,
    noiseLevel: 68,
    profile: 'FastRespone 84H',
    image: '',
    carCategory: EnumCarCategory.Coupe,
    fuelEfficiency: EnumFuelEfficiency.A,
    stock: EnumStock.STOCK
}];

export const FILTER_TREE_DATA: IFilterNode[] = [
    {
        name: 'Disponibilitate',
        id: '',
        children: [
            { name: 'În stoc', id: EnumStock.STOCK },
            { name: 'La comanda', id: EnumStock.COMMAND }
        ]
    },
    {
        name: 'Categorii',
        id: '',
        children: [
            { name: 'Anvelope Vară', id: EnumTireCategory.Summer },
            { name: 'Anvelope Iarnă', id: EnumTireCategory.Winter },
            { name: 'Anvelope All Season', id: EnumTireCategory.AllSeason },
            { name: 'Anvelope Industriale', id: EnumTireCategory.Industrial },
            { name: 'Anvelope Camion', id: EnumTireCategory.Truck },
            { name: 'Anvelope Motostivuitor', id: EnumTireCategory.Forklift },
            { name: 'Anvelope Agricole', id: EnumTireCategory.Agriculture }
        ]
    },
    {
        name: 'Producător',
        id: '',
        children: [
            { name: 'Continental', id: 'Continental' },
            { name: 'Pirelli', id: 'Pirelli' },
            { name: 'Michelin', id: 'Michelin' },
            { name: 'Bridgestone', id: 'Bridgestone' },
            { name: 'Hankook', id: 'Hankook' },
            { name: 'Goodyear', id: 'Goodyear' }
        ]
    },
    {
        name: 'Preț',
        id: '',
        children: [
            { name: 'Sub 100 lei', id: EnumPriceRange.UNDER100 },
            { name: 'Între 100 și 250 lei', id: EnumPriceRange.BETWEEN100_250 },
            { name: 'Între 250 și 500 lei', id: EnumPriceRange.BETWEEN250_500 },
            { name: 'Între 500 și 1000 lei', id: EnumPriceRange.BETWEEN500_1000 },
            { name: 'Peste 1000', id: EnumPriceRange.OVER1000 }
        ]
    },
    {
        name: 'Lățime',
        id: '',
        children: [
            { name: '225', id: '225' },
            { name: '215', id: '1' },
            { name: '235', id: '1' },
            { name: '205', id: '1' },
            { name: '195', id: '1' },
            { name: '255', id: '1' }
        ]
    },
    {
        name: 'Înălțime',
        id: '',
        children: [
            { name: '225', id: '1' },
            { name: '215', id: '1' },
            { name: '235', id: '1' },
            { name: '205', id: '1' },
            { name: '195', id: '1' },
            { name: '255', id: '1' }
        ]
    },
    {
        name: 'Diametru',
        id: '',
        children: [
            { name: '16', id: '1' },
            { name: '17', id: '1' },
            { name: '18', id: '1' },
            { name: '15', id: '1' },
            { name: '19', id: '1' },
            { name: '20', id: '1' }
        ]
    },
    {
        name: 'Clasă consum',
        id: '',
        children: [
            { name: EnumFuelEfficiency.A, id: EnumFuelEfficiency.A },
            { name: EnumFuelEfficiency.B, id: EnumFuelEfficiency.B },
            { name: EnumFuelEfficiency.C, id: EnumFuelEfficiency.C },
            { name: EnumFuelEfficiency.D, id: EnumFuelEfficiency.D },
            { name: EnumFuelEfficiency.E, id: EnumFuelEfficiency.E },
            { name: EnumFuelEfficiency.F, id: EnumFuelEfficiency.F },
            { name: EnumFuelEfficiency.G, id: EnumFuelEfficiency.G },
            { name: EnumFuelEfficiency.NONE, id: EnumFuelEfficiency.NONE }
        ]
    },
    {
        name: 'Clasă aderență',
        id: '',
        children: [
            { name: EnumWeatherEfficiency.A, id: EnumWeatherEfficiency.A },
            { name: EnumWeatherEfficiency.B, id: EnumWeatherEfficiency.B },
            { name: EnumWeatherEfficiency.C, id: EnumWeatherEfficiency.C },
            { name: EnumWeatherEfficiency.D, id: EnumWeatherEfficiency.D },
            { name: EnumWeatherEfficiency.E, id: EnumWeatherEfficiency.E },
            { name: EnumWeatherEfficiency.F, id: EnumWeatherEfficiency.F },
            { name: EnumWeatherEfficiency.G, id: EnumWeatherEfficiency.G },
            { name: EnumWeatherEfficiency.NONE, id: EnumWeatherEfficiency.NONE }
        ]
    }
];