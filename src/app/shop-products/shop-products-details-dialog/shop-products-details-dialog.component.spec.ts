import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductsDetailsDialogComponent } from './shop-products-details-dialog.component';

describe('ShopProductsDetailsDialogComponent', () => {
  let component: ShopProductsDetailsDialogComponent;
  let fixture: ComponentFixture<ShopProductsDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductsDetailsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProductsDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
