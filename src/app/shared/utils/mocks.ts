import { Observable, of } from 'rxjs';
import { PriceRange } from '../enum/price-range';
import { State } from '../enum/state';
import { FilterNode } from '../interface/filter-node';

export class MockDataService {
    constructor() { }

    getProducts(): Observable<any> {
        return of(productsMock);
    }
}

export const productsMock = [];

export const filterDataTree: FilterNode[] = [
    {
        name: 'Disponibilitate',
        id: '',
        children: [
            { name: 'În stoc', id: State.STOCK },
            { name: 'La comanda', id: State.COMMAND }
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
            { name: 'Sub 100 lei', id: PriceRange.UNDER100 },
            { name: 'Între 100 și 250 lei', id: PriceRange.BETWEEN100_250 },
            { name: 'Între 250 și 500 lei', id: PriceRange.BETWEEN250_500 },
            { name: 'Între 500 și 1000 lei', id: PriceRange.BETWEEN500_1000 },
            { name: 'Peste 1000', id: PriceRange.OVER1000 }
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
    }
];
