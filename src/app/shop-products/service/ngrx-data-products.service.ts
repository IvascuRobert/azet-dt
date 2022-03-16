

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DefaultDataService,
  HttpUrlGenerator,
  QueryParams
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseCartItem } from 'src/app/shared/class/base-cart-item';

@Injectable({
  providedIn: 'root'
})
export class NgrxDataProductsService extends DefaultDataService<BaseCartItem> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Products', http, httpUrlGenerator);
  }

  getAll(): Observable<BaseCartItem[]> {
    return super.getAll().pipe(map(products => products.map(product => this.mapProducts(product))));
  }

  getById(id: string | number): Observable<BaseCartItem> {
    return super.getById(id).pipe(map(product => this.mapProducts(product)));
  }

  getWithQuery(params: string | QueryParams): Observable<BaseCartItem[]> {
    return super.getWithQuery(params).pipe(map(products => products.map(product => this.mapProducts(product))));
  }

  private mapProducts(product: any): BaseCartItem {
    return { ...product, id: product._id }; // from mongo db key of identifier comes _id and NGRX-DATA want id
  }
}
