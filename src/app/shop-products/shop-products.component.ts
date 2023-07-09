import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent {
  products = [
    {
      id: 1,
      weather: 'wb_sunny',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      type: ['ATV', 'Forestier', 'Port']
    },
    {
      id: 2,
      weather: 'ac_unit',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      type: ['ATV', 'Forestier', 'Port']
    },
    {
      id: 3,
      weather: 'ac_unit',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      type: ['ATV', 'Forestier', 'Port']
    },
    {
      id: 4,
      weather: 'wb_sunny',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      type: ['ATV', 'Forestier', 'Port']
    },
    {
      id: 5,
      weather: 'wb_sunny',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      type: ['ATV', 'Forestier', 'Port']
    },
    {
      id: 6,
      weather: 'sunny_snowing',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      type: ['ATV', 'Forestier', 'Port']
    }
  ]
}
