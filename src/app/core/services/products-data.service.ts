import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    DefaultDataService,
    HttpUrlGenerator,
    Logger,
    QueryParams
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductDataClass } from 'src/app/shared/classes.class';

@Injectable()
export class ProductsService extends DefaultDataService<ProductDataClass> {

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Products', http, httpUrlGenerator);
    }

    getAll(): Observable<ProductDataClass[]> {
        return super.getAll().pipe(map(products => products.map(product => this.mapProducts(product))));
    }

    getById(id: string | number): Observable<ProductDataClass> {
        return super.getById(id).pipe(map(product => this.mapProducts(product)));
    }

    getWithQuery(params: string | QueryParams): Observable<ProductDataClass[]> {
        return super.getWithQuery(params).pipe(map(products => products.map(product => this.mapProducts(product))));
    }

    private mapProducts(product: any): ProductDataClass {
        return { ...product, id: product._id }; // form mongo db key of identifier comes _id and NGRX-DATA want id
    }
}