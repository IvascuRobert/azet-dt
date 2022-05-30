import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      customPatternValidator(patterns.onlyCharacters)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      customPatternValidator(patterns.onlyCharacters)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  hidePasswordRF = true;
  hidePasswordLF = true;
  tabIndex = 0;

  get emailLF(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordLF(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get firstNameRF(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastNameRF(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }

  get emailRF(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get passwordRF(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPasswordRF(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  get emailFPF(): FormControl {
    return this.forgetPasswordForm.get('email') as FormControl;
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
