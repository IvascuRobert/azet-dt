import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHomePromoComponent } from './shop-home-promo.component';

describe('ShopHomePromoComponent', () => {
  let component: ShopHomePromoComponent;
  let fixture: ComponentFixture<ShopHomePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHomePromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHomePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
