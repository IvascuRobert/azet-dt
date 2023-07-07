import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/types/interface/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated = false;

  constructor(private http: HttpClient) { }

  login(params: any): Observable<User> {
    return this.http.get<User>(params);
  }

  register(params: any): Observable<User> {
    return this.http.get<User>(params);
  }

  forgotPassword(params: any): Observable<User> {
    return this.http.get<User>(params);
  }
}
