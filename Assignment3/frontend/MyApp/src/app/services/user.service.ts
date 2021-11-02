import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint: string = 'http://localhost:4000/Users';
  private optHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };
  userIdData: any;
  userIdSource = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    const api = `${this.endpoint}`;
    return this.http
      .post(api, user, this.optHeaders)
      .pipe(catchError(this.handleError));
  }

  getUsers(): Observable<any> {
    const api = `${this.endpoint}`;
    return this.http.get(api, this.optHeaders).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  getUserById(id: number): Observable<any> {
    const api = `${this.endpoint}/${id}`;
    return this.http
      .get(api, this.optHeaders)
      .pipe(catchError(this.handleError));
  }

  updateUser(user: User, id: number): Observable<any> {
    const api = `${this.endpoint}/${id}`;
    return this.http
      .put(api, user, this.optHeaders)
      .pipe(catchError(this.handleError));
  }

  deleteUser(id: number): Observable<any> {
    const api = `${this.endpoint}/${id}`;
    return this.http
      .delete(api, this.optHeaders)
      .pipe(catchError(this.handleError));
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

  changeUserId(userId: number) {
    this.userIdSource.next(userId);
  }
}
