import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { NgrxLoginService } from 'src/app/core/services/ngrx-login.service';
import { SubSink } from 'subsink';
import { EnumMessageType } from '../shared/enums.enum';
import { IMessage, IUserLogin } from '../shared/interfaces.interface';
import { MessageComponent } from '../shared/message/message.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit, OnDestroy {

  private subs = new SubSink();

  administrationLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  hidePasswordLF = true;
  loadingLogin$: Observable<boolean>;

  get emailLF(): FormControl {
    return this.administrationLoginForm.get('email') as FormControl;
  }

  get passwordLF(): FormControl {
    return this.administrationLoginForm.get('password') as FormControl;
  }

  constructor(
    private ngrxLoginService: NgrxLoginService,
    private _snackBar: MatSnackBar
  ) {
    this.loadingLogin$ = this.ngrxLoginService.loading$;
  }

  ngOnInit(): void {
    this.subs.sink = this.loadingLogin$.subscribe((loading) => {
      if (loading) {
        this.administrationLoginForm.disable();
      } else {
        this.administrationLoginForm.enable();
      }
    });
  }

  onSubmitAdministrationLoginForm(): void {
    const administrationLoginForm = this.administrationLoginForm.getRawValue();

    this.ngrxLoginService.add(administrationLoginForm, { isOptimistic: false }).subscribe(
      (result: IUserLogin) => result,
      (err: IUserLogin) => {
        const { message } = err;
        this.messageAlert(EnumMessageType.DANGER, message);
      }
    );
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
