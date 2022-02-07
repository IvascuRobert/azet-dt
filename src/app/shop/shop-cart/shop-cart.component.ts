import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { TrackByService } from 'src/app/core/services/trackBy.service';
import { ValidationService } from 'src/app/core/services/validation.service';
import { ProductClass } from 'src/app/shared/classes.class';
import { EnumState, EnumViewMode } from 'src/app/shared/enums.enum';
import { ICart, IProductOptions } from 'src/app/shared/interfaces.interface';
import { patterns } from 'src/app/shared/patterns';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCartComponent implements OnInit {

  @ViewChild('cartCheckoutTemplate') cartCheckoutTemplate!: TemplateRef<any>;

  templateViewMode = EnumViewMode.LIST;
  configDialog: MatDialogConfig = {
    hasBackdrop: true
  };

  cart$: Observable<ICart>;
  tabIndex = 0;
  stateTemplate = EnumState;
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      ValidationService.customPatternValidator(patterns.onlyCharacters)
    ]),
    phone: new FormControl('', [
      Validators.required,
      ValidationService.customPatternValidator(patterns.phoneNumber)
    ]),
    message: new FormControl('', Validators.required),
  });

  options: IProductOptions = {
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
    public trackByService: TrackByService,
    public cartService: CartService,
    readonly dialog: MatDialog
  ) {
    this.cart$ = this.cartService.cartProducts$;
  }

  ngOnInit(): void {
  }

  removeToCart(product: ProductClass): void {
    this.cartService.removeCartProduct(product);
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
