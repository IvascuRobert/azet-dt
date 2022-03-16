import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { patterns } from 'src/app/shared/utils/patterns';
import { customPatternValidator } from 'src/app/shared/utils/validation';
import { SubSink } from 'subsink';
import { ForgotPasswordService } from '../service/forgot-password/forgot-password.service';
import { LoginService } from '../service/login/login.service';
import { RegisterService } from '../service/register/register.service';

@Component({
  selector: 'app-shop-authentication-view',
  templateUrl: './shop-authentication-view.component.html',
  styleUrls: ['./shop-authentication-view.component.scss']
})
export class ShopAuthenticationViewComponent implements OnInit, OnDestroy {

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

  loadingLogin$: Observable<boolean>;
  loadingRegister$: Observable<boolean>;
  loadingForgotPassword$: Observable<boolean>;

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
    private loginService: LoginService,
    private registerService: RegisterService,
    private forgotPasswordService: ForgotPasswordService
  ) {
    this.loadingLogin$ = this.loginService.loading$;
    this.loadingRegister$ = this.registerService.loading$;
    this.loadingForgotPassword$ = this.forgotPasswordService.loading$;
  }

  ngOnInit(): void {
    this.subs.sink = this.loadingLogin$.subscribe((loading) => {
      if (loading) {
        this.loginForm.disable();
      } else {
        this.loginForm.enable();
      }
    });

    this.subs.sink = this.loadingRegister$.subscribe((loading) => {
      if (loading) {
        this.loginForm.disable();
      } else {
        this.loginForm.enable();
      }
    });

    this.subs.sink = this.loadingForgotPassword$.subscribe((loading) => {
      if (loading) {
        this.loginForm.disable();
      } else {
        this.loginForm.enable();
      }
    });

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
    const loginForm = this.loginForm.getRawValue();
    this.loginService.add(loginForm, { isOptimistic: false });
  }

  onSubmitRegisterForm(): void {
    const registerFormValues = this.registerForm.getRawValue();
    this.registerService.add(registerFormValues, { isOptimistic: false });

    console.log(this.registerForm, 'this.registerForm');
  }

  onSubmitForgetPasswordForm(): void {
    const forgetPasswordForm = this.forgetPasswordForm.getRawValue();
    this.forgotPasswordService.add(forgetPasswordForm, { isOptimistic: false });

    console.log(forgetPasswordForm, 'forgetPasswordForm');
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
