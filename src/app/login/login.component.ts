import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataServiceError } from 'ngrx-data';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { NgrxForgotPasswordService } from '../core/services/ngrx-forgot-password.service';
import { NgrxLoginService } from '../core/services/ngrx-login.service';
import { NgrxRegisterService } from '../core/services/ngrx-register.service';
import { ValidationService } from '../core/services/validation.service';
import { CustomErrorStateMatcher } from '../shared/classes.class';
import { EnumMessageType } from '../shared/enums.enum';
import { IMessage } from '../shared/interfaces.interface';
import { MessageComponent } from '../shared/message/message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  }, { validators: [ValidationService.checkPasswordAndConfirmPasswordAreSame] });

  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  hide = true;
  tabIndex = 0;
  errorMessage: string;
  matcher = new CustomErrorStateMatcher();

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
    private ngrxLoginService: NgrxLoginService,
    private ngrxRegisterService: NgrxRegisterService,
    private ngrxForgotPasswordService: NgrxForgotPasswordService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.loadingLogin$ = this.ngrxLoginService.loading$;
    this.loadingRegister$ = this.ngrxRegisterService.loading$;
    this.loadingForgotPassword$ = this.ngrxForgotPasswordService.loading$;
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
  }

  onSubmitLoginForm(): void {
    const loginForm = this.loginForm.getRawValue();
    this.subs.sink = this.ngrxLoginService
      .add(loginForm)
      .subscribe(
        (user) => {
          // this.router.navigateByUrl('/');
          this.messageAlert(EnumMessageType.SUCCESS, 'Autentificare efectuată cu succes.');
        },
        (error: DataServiceError) => {
          const { message } = error;
          this.messageAlert(EnumMessageType.DANGER, message);
        });
  }

  onSubmitRegisterForm(): void {
    const registerFormValues = this.registerForm.getRawValue();
    const registerForm = this.deepClone(this.omit(registerFormValues, 'confirmPassword'));

    // this.subs.sink = this.ngrxRegisterService
    //   .add(registerForm)
    //   .subscribe(
    //     (user) => {
    //       // this.router.navigateByUrl('/');
    //       this.messageAlert(EnumMessageType.SUCCESS, 'Înregistrare efectuată cu succes.');
    //     },
    //     (error: DataServiceError) => {
    //       const { message } = error;
    //       this.messageAlert(EnumMessageType.DANGER, message);
    //     });

    console.log(this.registerForm, 'this.registerForm');
  }

  onSubmitForgetPasswordForm(): void {
    const forgetPasswordForm = this.forgetPasswordForm.getRawValue();
    this.subs.sink = this.ngrxForgotPasswordService
      .add(forgetPasswordForm)
      .subscribe(
        (user) => {
          console.log(user, 'user')
          console.log("User is logged in");
          // this.router.navigateByUrl('/');
          this.messageAlert(EnumMessageType.SUCCESS, 'Resetarea efectuată cu succes. Verificați-vă email-ul.');
        },
        (error: DataServiceError) => {
          console.log(error, 'error')
          const { message } = error;
          this.messageAlert(EnumMessageType.DANGER, message);
        });;

    console.log(forgetPasswordForm, 'forgetPasswordForm');
  }

  changeTab(index: number): void {
    this.loginForm.reset();
    this.registerForm.reset();
    this.forgetPasswordForm.reset();
    this.tabIndex = index;
  }

  omit(obj, ...props) {
    const result = { ...obj };
    props.forEach(function (prop) {
      delete result[prop];
    });
    return result;
  }

  deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj)) as T;
  }

  messageAlert(type: EnumMessageType, message: string) {
    this._snackBar.openFromComponent(MessageComponent, {
      duration: 5000,
      data: <IMessage>{
        type,
        message
      }
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
