import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHomeAdvancedSearchComponent } from './shop-home-advanced-search.component';

describe('ShopHomeAdvancedSearchComponent', () => {
  let component: ShopHomeAdvancedSearchComponent;
  let fixture: ComponentFixture<ShopHomeAdvancedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHomeAdvancedSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHomeAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
