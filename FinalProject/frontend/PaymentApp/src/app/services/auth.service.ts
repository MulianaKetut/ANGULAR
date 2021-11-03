import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Login } from '../models/Login';
import { Registration } from '../models/Registration';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:5000/api/Auth';
  // endpoint: string = 'https://endpoint-payment.herokuapp.com/api/Auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  cachedRequest: Array<HttpRequest<any>> = [];

  constructor(private http: HttpClient, private router: Router) {}

  // sign-up
  signUp(user: Registration): Observable<any> {
    let api = `${this.endpoint}/Register`;
    // return this.http.post(api, user).pipe(catchError(this.handleError));
    return this.http.post(api, user);
  }

  // sign-in
  signIn(user: Login) {
    let api = `${this.endpoint}/Login`;
    return this.http.post<any>(api, user);
  }

  refreshToken() {
    let api = `${this.endpoint}/RefreshToken`;
    let data = {
      token: localStorage.getItem('access_token'),
      refreshToken: localStorage.getItem('refresh_token'),
    };
    return this.http.post<any>(api, data).subscribe((res: any) => {
      // console.log(res);
      if (res.status == 'BadRequest') {
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: res.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Refresh token Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('refresh_token', res.refreshToken);
        this.router.navigate(['home']);
      }
    });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
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
    // console.log('ERROR MSG', msg);
    return throwError(msg);
  }

  public collectFailedRequest(request: any): void {
    this.cachedRequest.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
