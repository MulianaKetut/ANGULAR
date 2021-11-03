import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { PaymentDetail } from '../models/PaymentDetail';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private endpoint: string = 'http://localhost:5000/api/PaymentDetail';
  // private endpoint: string = 'https://endpoint-payment.herokuapp.com/api/PaymentDetail';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  createPaymentDetail(paymentDetail: PaymentDetail): Observable<any> {
    const api = `${this.endpoint}`;
    return this.http
      .post(api, paymentDetail, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  getPaymentDetails(): Observable<any> {
    const api = `${this.endpoint}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  getPaymentDetailById(id: number): Observable<any> {
    const api = `${this.endpoint}/${id}`;
    return this.http
      .get(api, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  updatePaymentDetail(
    paymentDetail: PaymentDetail,
    id: number
  ): Observable<any> {
    const api = `${this.endpoint}/${id}`;
    return this.http
      .put(api, paymentDetail, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  deletePaymentDetail(id: number): Observable<any> {
    const api = `${this.endpoint}/${id}`;
    return this.http
      .delete(api, { headers: this.headers })
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
}
