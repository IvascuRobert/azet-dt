import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { DropdownValue } from '../types/interface/dropdown-value';
import { Product } from '../types/interface/product';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss'],
})
export class ShopProductsComponent implements OnInit {
  productsForm = this.fb.group({
    sortBy: ['1'],
    brand: [''],
    width: [''],
    height: [''],
    diameter: [''],
    profile: [''],
    minPrice: [500],
    maxPrice: [1500],
    paginator: this.fb.group({
      length: [50],
      pageSize: [10],
      pageIndex: [0],
      pageSizeOptions: [[5, 10, 25]],
      hidePageSize: [false],
      showPageSizeOptions: [true],
      showFirstLastButtons: [true],
    }),
  });

  get paginatorFormGroup() {
    return this.productsForm.get('paginator') as FormGroup;
  }

  get paginatorLength() {
    return this.paginatorFormGroup?.value.length;
  }

  get paginatorPageSize() {
    return this.paginatorFormGroup?.value.pageSize;
  }

  get paginatorPageIndex() {
    return this.paginatorFormGroup?.value.pageIndex;
  }

  get paginatorPageSizeOptions() {
    return this.paginatorFormGroup?.value.pageSizeOptions;
  }

  get paginatorHidePageSize() {
    return this.paginatorFormGroup?.value.hidePageSize;
  }

  get paginatorShowPageSizeOptions() {
    return this.paginatorFormGroup?.value.showPageSizeOptions;
  }

  get paginatorShowFirstLastButtons() {
    return this.paginatorFormGroup?.value.showFirstLastButtons;
  }

  products: Product[] = [
    {
      id: 1,
      weather: 'wb_sunny',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      vehicleType: ['ATV', 'Forestier', 'Port'],
      price: 1234,
      pictureSrc: './assets/pictures/tires/tire.png',
      description:
        'TR 135 este anvelopa cea mai potrivită pentru tractoare în aplicații de prelucrare a solului. Carcasa sa întărită și compusul special ce asigură rezistență la tăiere și rupere conferă anvelopelor un ciclu de viață extins. Tracțiunea, proprietățile de autocurățare și capacitatea de încărcare sunt caracteristici cheie care fac ca anvelopa TR 135 să fie partenerul ideal chiar și în cele mai dificile condiții de sol.',
      width: '26.5',
      height: '26.5',
      diameter: '25',
      profile: 'R20',
    },
    {
      id: 2,
      weather: 'ac_unit',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      vehicleType: ['ATV', 'Forestier', 'Port'],
      price: 1234,
      pictureSrc: './assets/pictures/tires/tire.png',
      description: '',
      width: '26.5',
      height: '26.5',
      diameter: '25',
      profile: 'R20',
    },
    {
      id: 3,
      weather: 'ac_unit',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      vehicleType: ['ATV', 'Forestier', 'Port'],
      price: 1234,
      pictureSrc: './assets/pictures/tires/tire.png',
      discount: 10,
      description: '',
      width: '26.5',
      height: '26.5',
      diameter: '25',
      profile: 'R20',
    },
    {
      id: 4,
      weather: 'wb_sunny',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      vehicleType: ['ATV', 'Forestier', 'Port'],
      price: 1234,
      pictureSrc: './assets/pictures/tires/tire.png',
      description: '',
      width: '26.5',
      height: '26.5',
      diameter: '25',
      profile: 'R20',
    },
    {
      id: 5,
      weather: 'wb_sunny',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      vehicleType: ['ATV', 'Forestier', 'Port'],
      price: 1234,
      pictureSrc: './assets/pictures/tires/tire.png',
      discount: 15,
      description: '',
      width: '26.5',
      height: '26.5',
      diameter: '25',
      profile: 'R20',
    },
    {
      id: 6,
      weather: 'sunny_snowing',
      name: 'ANVELOPA 145/70-6 KENDA K290 SCORPION 4PR TL',
      brand: 'Kenda',
      vehicleType: ['ATV', 'Forestier', 'Port'],
      price: 1234,
      pictureSrc: './assets/pictures/tires/tire.png',
      discount: 30,
      description: '',
      width: '26.5',
      height: '26.5',
      diameter: '25',
      profile: 'R20',
    },
  ];

  sortOptions: DropdownValue[] = [
    {
      value: '1',
      label: 'Cel mai mic pret',
    },
    {
      value: '2',
      label: 'Cel mai mare pret',
    },
    {
      value: '3',
      label: 'Sorteaza dupa popularitate',
    },
    {
      value: '4',
      label: 'Sorteaza dupa evaluarea medie',
    },
    {
      value: '5',
      label: 'Sorteaza dupa cele mai recente',
    },
  ];

  brandOptions: DropdownValue[] = [
    {
      value: '1',
      label: 'One',
    },
    {
      value: '2',
      label: 'Two',
    },
    {
      value: '3',
      label: 'Three',
    },
  ];

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.productsForm.valueChanges.subscribe((productsFormValue) =>
      console.log(productsFormValue)
    );
  }

  handlePageEvent(e: PageEvent) {
    const { length, pageIndex, pageSize } = e;

    this.paginatorFormGroup?.patchValue({
      length,
      pageIndex,
      pageSize,
    });
  }

  resetFilters() {
    this.productsForm.get('brand')?.reset();
    this.productsForm.get('width')?.reset();
    this.productsForm.get('height')?.reset();
    this.productsForm.get('diameter')?.reset();
    this.productsForm.get('profile')?.reset();
    this.productsForm.get('minPrice')?.reset();
    this.productsForm.get('maxPrice')?.reset();
  }
}
