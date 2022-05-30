import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/shared/class/base-cart-item';
import { DropdownValue } from 'src/app/shared/interface/dropdown-value';
import { azetDTGoogleMapsLocation, azetDtMenuHeaderItems } from 'src/app/shared/utils/utils';
import { DialogContentScheduleInServiceComponent } from '../dialog-content-schedule-in-service/dialog-content-schedule-in-service.component';
import { DialogContentScheduleComponent } from '../dialog-content-schedule/dialog-content-schedule.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() adminView: boolean = false;
  @Output() openSideNavDrawer = new EventEmitter<boolean>();

  cart$: Observable<Product>;
  azetDtLocation = azetDTGoogleMapsLocation;
  azetDtMenuHeaderItems: DropdownValue[] = azetDtMenuHeaderItems;

  constructor(
    // public cartService: CartService<Product>,
    public dialog: MatDialog
  ) {
    // this.cart$ = this.cartService.cartProducts$;
    this.cart$ = of();
  }

  ngOnInit(): void {
  }

  removeCartProduct(product: Product): void {
    // this.cartService.removeCartProduct(product);
  }

  clickMenuIcon(): void {
    this.openSideNavDrawer.emit(true);
  }

  openScheduleInService(): void {
    this.dialog.open(DialogContentScheduleInServiceComponent, {
      width: '400px',
      disableClose: true
    });
  }

  openSchedule(): void {
    this.dialog.open(DialogContentScheduleComponent);
  }
}
