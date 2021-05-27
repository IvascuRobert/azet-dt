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
import { ProductClass } from 'src/app/shared/classes.class';

@Injectable()
export class NgrxProductsMethodsService extends DefaultDataService<ProductClass> {

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Products', http, httpUrlGenerator);
    }

    getAll(): Observable<ProductClass[]> {
        return super.getAll().pipe(map(products => products.map(product => this.mapProducts(product))));
    }

    getById(id: string | number): Observable<ProductClass> {
        return super.getById(id).pipe(map(product => this.mapProducts(product)));
    }

    getWithQuery(params: string | QueryParams): Observable<ProductClass[]> {
        return super.getWithQuery(params).pipe(map(products => products.map(product => this.mapProducts(product))));
    }

    private mapProducts(product: any): ProductClass {
        return { ...product, id: product._id }; // form mongo db key of identifier comes _id and NGRX-DATA want id
    }
}