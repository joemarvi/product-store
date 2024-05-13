import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/products.interfaces';
import { ProductPayload } from '../interfaces/payload-products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
    };

  post(payload: ProductPayload) {
    return this.httpClient.post('/api/products', payload);
    };
}