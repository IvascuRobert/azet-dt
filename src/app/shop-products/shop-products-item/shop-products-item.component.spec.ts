import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductsItemComponent } from './shop-products-item.component';

describe('ShopProductsItemComponent', () => {
  let component: ShopProductsItemComponent;
  let fixture: ComponentFixture<ShopProductsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
