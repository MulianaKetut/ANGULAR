import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: { name: string; email: string; _id: number } = {
    name: '',
    email: '',
    _id: 0,
  };

  constructor(private http: HttpClient, private router: Router) {}

  // sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  // error-handling
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  // sign-in
  signIn(user: User) {
    let api = `${this.endpoint}/login`;
    return this.http.post<any>(api, user).subscribe((res: any) => {
      localStorage.setItem('access_token', res.token);
      localStorage.setItem('name', res.name);
      // this.getUserProfile(res._id).subscribe((res: any) => {
      //   this.currentUser = res;
      //   this.router.navigate(['user-profile/' + res.msg._id]);
      // });
      this.router.navigate(['studios']);
    });
  }

  // user-profile
  getUserProfile(id: number): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
