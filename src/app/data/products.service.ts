import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductResponse } from '../interface/product-response';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _http: HttpClient) { }

  getList():Observable<IProductResponse>{
    return this._http.get<IProductResponse>('https://fakerapi.it/api/v1/products?_quantity=10&_taxes=12&_categories_type=uuid')
  }
}
