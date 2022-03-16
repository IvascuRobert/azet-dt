import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shop-home-search',
  templateUrl: './shop-home-search.component.html',
  styleUrls: ['./shop-home-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHomeSearchComponent implements OnInit {

  shopHomePageSearch = new FormGroup({
    profile: new FormControl(''),
    size: new FormControl(''),
    carCategories: new FormControl(''),
  });
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  get profile(): FormControl {
    return this.shopHomePageSearch.get('profile') as FormControl;
  }

  get size(): FormControl {
    return this.shopHomePageSearch.get('size') as FormControl;
  }

  get carCategories(): FormControl {
    return this.shopHomePageSearch.get('carCategories') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue = this.shopHomePageSearch.getRawValue();
    console.log(formValue, 'formValue');
  }
}
