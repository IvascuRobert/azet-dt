import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCartComponent  {

  // @ViewChild('cartCheckoutTemplate') cartCheckoutTemplate!: TemplateRef<any>;

  // templateViewMode = ViewMode.LIST;
  // configDialog: MatDialogConfig = {
  //   hasBackdrop: true
  // };

  // cart$: Observable<Product>;
  // tabIndex = 0;
  // stateTemplate = State;
  // contactForm = new UntypedFormGroup({
  //   name: new UntypedFormControl('', [
  //     Validators.required,
  //     Validators.maxLength(20),
  //     Validators.minLength(3),
  //     customPatternValidator(patterns.onlyCharacters)
  //   ]),
  //   phone: new UntypedFormControl('', [
  //     Validators.required,
  //     customPatternValidator(patterns.phoneNumber)
  //   ]),
  //   message: new UntypedFormControl('', Validators.required),
  // });

  // options: any = {
  //   showAddButton: false,
  //   showRemoveButton: true
  // };

  // get name(): UntypedFormControl {
  //   return this.contactForm.get('name') as UntypedFormControl;
  // }

  // get phone(): UntypedFormControl {
  //   return this.contactForm.get('phone') as UntypedFormControl;
  // }

  // get message(): UntypedFormControl {
  //   return this.contactForm.get('message') as UntypedFormControl;
  // }

  // constructor(
  //   public cartService: CartService,
  //   readonly dialog: MatDialog
  // ) {
  //   // this.cart$ = this.cartService.cartProducts$;
  //   this.cart$ = of();
  // }

  // ngOnInit(): void {
  // }

  // removeToCart(product: Product): void {
  //   // this.cartService.removeCartProduct(product);
  // }

  // openCheckoutProducts(): void {
  //   const dialogRef = this.dialog.open(this.cartCheckoutTemplate, this.configDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       const formValue = this.contactForm.getRawValue();
  //       console.log(formValue, 'formValue');

  //       console.log(`Dialog result: ${result}`);
  //     }
  //   });
  // }

  // checkoutProducts(): void {

  // }

}
