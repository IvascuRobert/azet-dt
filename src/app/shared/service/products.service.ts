import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../types/class/base-cart-item';
import { HttpUrls } from '../enum/http-url';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${HttpUrls.Products}/${id}`);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(HttpUrls.Products);
  }

}
