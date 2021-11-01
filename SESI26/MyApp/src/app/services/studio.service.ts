import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudioService {
  endpoint: string = 'http://localhost:3000/studios';

  constructor(private http: HttpClient) {}

  getStudios() {
    const api = `${this.endpoint}`;

    return this.http.get(api).pipe(catchError(this.handleError));
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
}
