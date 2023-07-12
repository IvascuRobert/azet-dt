import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductsDetailsComponent } from './shop-products-details.component';

describe('ShopProductsDetailsComponent', () => {
  let component: ShopProductsDetailsComponent;
  let fixture: ComponentFixture<ShopProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
