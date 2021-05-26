import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logintForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  registertForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmationPassword: new FormControl('', Validators.required),
  });

  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  hide = true;
  tabIndex = 0;

  get emailLF(): FormControl {
    return this.logintForm.get('email') as FormControl;
  }

  get passwordLF(): FormControl {
    return this.logintForm.get('password') as FormControl;
  }

  get firstNameRF(): FormControl {
    return this.registertForm.get('firstName') as FormControl;
  }

  get lastNameRF(): FormControl {
    return this.registertForm.get('lastName') as FormControl;
  }

  get emailRF(): FormControl {
    return this.registertForm.get('email') as FormControl;
  }

  get passwordRF(): FormControl {
    return this.registertForm.get('password') as FormControl;
  }

  get confirmationPasswordRF(): FormControl {
    return this.registertForm.get('confirmationPassword') as FormControl;
  }

  get emailFPF(): FormControl {
    return this.forgetPasswordForm.get('email') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitLoginForm(): void {
    const logintForm = this.logintForm.getRawValue();

    console.log(logintForm, 'logintForm');
  }

  onSubmitRegisterForm(): void {
    const registertForm = this.registertForm.getRawValue();

    console.log(registertForm, 'registertForm');
  }

  onSubmitForgetPasswordForm(): void {
    const forgetPasswordForm = this.forgetPasswordForm.getRawValue();

    console.log(forgetPasswordForm, 'forgetPasswordForm');
  }

  getErrorMessage(): string {
    return 'Câmpul este obligatoriu !';
  }

  changeTab(index: number): void {
    this.logintForm.reset();
    this.registertForm.reset();
    this.forgetPasswordForm.reset();
    this.tabIndex = index;
  }

}
