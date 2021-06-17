import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { TrackByService } from '../core/services/trackBy.service';
import { ValidationService } from '../core/services/validation.service';
import { ProductClass } from '../shared/classes.class';
import { EnumState } from '../shared/enums.enum';
import { ICart } from '../shared/interfaces.interface';
import { patterns } from '../shared/patterns';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  @ViewChild('cartCheckoutTemplate') cartCheckoutTemplate: TemplateRef<any>;
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
    public trackbyService: TrackByService,
    public cartService: CartService,
    readonly dialog: MatDialog
  ) {
    this.cart$ = this.cartService.cartProducts$;
  }

  ngOnInit(): void {
  }

  removeCartProduct(product: ProductClass): void {
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
