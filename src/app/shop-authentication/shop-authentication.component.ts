import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { patterns } from 'src/app/shared/utils/patterns';
import { customPatternValidator } from 'src/app/shared/utils/validation';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-shop-authentication',
  templateUrl: './shop-authentication.component.html',
  styleUrls: ['./shop-authentication.component.scss']
})
export class ShopAuthenticationComponent implements OnInit, OnDestroy {

  private subs = new SubSink();

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)])
  });

  registerForm = new UntypedFormGroup({
    firstName: new UntypedFormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      customPatternValidator(patterns.onlyCharacters)
    ]),
    lastName: new UntypedFormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      customPatternValidator(patterns.onlyCharacters)
    ]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
  });

  forgetPasswordForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
  });

  hidePasswordRF = true;
  hidePasswordLF = true;
  tabIndex = 0;

  get emailLF(): UntypedFormControl {
    return this.loginForm.get('email') as UntypedFormControl;
  }

  get passwordLF(): UntypedFormControl {
    return this.loginForm.get('password') as UntypedFormControl;
  }

  get firstNameRF(): UntypedFormControl {
    return this.registerForm.get('firstName') as UntypedFormControl;
  }

  get lastNameRF(): UntypedFormControl {
    return this.registerForm.get('lastName') as UntypedFormControl;
  }

  get emailRF(): UntypedFormControl {
    return this.registerForm.get('email') as UntypedFormControl;
  }

  get passwordRF(): UntypedFormControl {
    return this.registerForm.get('password') as UntypedFormControl;
  }

  get confirmPasswordRF(): UntypedFormControl {
    return this.registerForm.get('confirmPassword') as UntypedFormControl;
  }

  get emailFPF(): UntypedFormControl {
    return this.forgetPasswordForm.get('email') as UntypedFormControl;
  }

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.subs.sink = combineLatest([
      this.passwordRF.valueChanges,
      this.confirmPasswordRF.valueChanges
    ]).subscribe(([password, confirmPassword]) => {
      if (password && (password.length >= 8) && confirmPassword && (confirmPassword.length >= 8) && (password != confirmPassword)) {
        this.passwordRF.setErrors({ passwordMismatch: true });
        this.confirmPasswordRF.setErrors({ passwordMismatch: true });
      } else if (password && (password.length >= 8) && confirmPassword && (confirmPassword.length >= 8) && (password == confirmPassword)) {
        this.passwordRF.setErrors(null);
        this.confirmPasswordRF.setErrors(null);
      }
    });
  }

  onSubmitLoginForm(): void {
    const loginFormValues = this.loginForm.getRawValue();
    this.authenticationService.login(loginFormValues);
    console.log(loginFormValues, 'loginFormValues');
  }

  onSubmitRegisterForm(): void {
    const registerFormValues = this.registerForm.getRawValue();
    this.authenticationService.login(registerFormValues);
    console.log(registerFormValues, 'registerFormValues');
  }

  onSubmitForgetPasswordForm(): void {
    const forgetPasswordFormValues = this.forgetPasswordForm.getRawValue();
    this.authenticationService.forgotPassword(forgetPasswordFormValues);
    console.log(forgetPasswordFormValues, 'forgetPasswordFormValues');
  }

  changeTab(index: number): void {
    this.loginForm.reset();
    this.registerForm.reset();
    this.forgetPasswordForm.reset();
    this.tabIndex = index;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
