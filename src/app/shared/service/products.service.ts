import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUrls } from 'src/app/types/enum/http-url';
import { Product } from 'src/app/types/interface/product';
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
