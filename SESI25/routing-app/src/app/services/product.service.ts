import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../mocks/mock-products';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    //fetched list product
    return of(PRODUCTS);
  }

  getProductById(id: string): Observable<Product> {
    const product = PRODUCTS.find((option) => option.id == id)!;
    return of(product);
  }
}
