import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/shared/class/base-cart-item';
import { State } from 'src/app/shared/enum/state';
import { ViewMode } from 'src/app/shared/enum/view-mode';
import { patterns } from 'src/app/shared/utils/patterns';
import { customPatternValidator } from 'src/app/shared/utils/validation';
import { CartService } from '../shared/service/cart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCartComponent implements OnInit {

  @ViewChild('cartCheckoutTemplate') cartCheckoutTemplate!: TemplateRef<any>;

  templateViewMode = ViewMode.LIST;
  configDialog: MatDialogConfig = {
    hasBackdrop: true
  };

  cart$: Observable<Product>;
  tabIndex = 0;
  stateTemplate = State;
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      customPatternValidator(patterns.onlyCharacters)
    ]),
    phone: new FormControl('', [
      Validators.required,
      customPatternValidator(patterns.phoneNumber)
    ]),
    message: new FormControl('', Validators.required),
  });

  options: any = {
    showAddButton: false,
    showRemoveButton: true
  };

  get name(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get phone(): FormControl {
    return this.contactForm.get('phone') as FormControl;
  }

  get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  constructor(
    public cartService: CartService,
    readonly dialog: MatDialog
  ) {
    // this.cart$ = this.cartService.cartProducts$;
    this.cart$ = of();
  }

  ngOnInit(): void {
  }

  removeToCart(product: Product): void {
    // this.cartService.removeCartProduct(product);
  }

  openCheckoutProducts(): void {
    const dialogRef = this.dialog.open(this.cartCheckoutTemplate, this.configDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const formValue = this.contactForm.getRawValue();
        console.log(formValue, 'formValue');

        console.log(`Dialog result: ${result}`);
      }
    });
  }

  checkoutProducts(): void {

  }

}
