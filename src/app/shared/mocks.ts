import { Observable, of } from "rxjs";
import { ProductDataClass } from "./classes.class";
import { EnumCarCategory, EnumFuelEfficiency, EnumSeason, EnumWeatherEfficiency } from "./enums.enum";
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
    season: EnumSeason.Winter,
    noiseLevel: 68,
    profile: 'FastRespone 84H',
    image: '',
    carCategory: EnumCarCategory.CamperVAN,
    fuelEfficiency: EnumFuelEfficiency.F,
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
    season: EnumSeason.AllSeason,
    noiseLevel: 68,
    profile: 'FastRespone 84H',
    image: '',
    carCategory: EnumCarCategory.Coupe,
    fuelEfficiency: EnumFuelEfficiency.D,
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
    season: EnumSeason.Summer,
    noiseLevel: 68,
    profile: 'FastRespone 84H',
    image: '',
    carCategory: EnumCarCategory.Coupe,
    fuelEfficiency: EnumFuelEfficiency.C,
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
    season: EnumSeason.Summer,
    noiseLevel: 68,
    profile: 'FastRespone 84H',
    image: '',
    carCategory: EnumCarCategory.Coupe,
    fuelEfficiency: EnumFuelEfficiency.A,
}]