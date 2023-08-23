import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCartComponent } from './sidenav-cart.component';

describe('SidenavCartComponent', () => {
  let component: SidenavCartComponent;
  let fixture: ComponentFixture<SidenavCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
