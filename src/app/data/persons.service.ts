import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { IPersonResponse } from "../interface/person-response";

@Injectable ({
    providedIn: 'root'
})

export class PersonsService {

    constructor( private _http: HttpClient) { }
    
    getList():Observable<IPersonResponse>{
        return this._http.get<IPersonResponse>('https://fakerapi.it/api/v1/persons?_quantity=7&_gender=male&_birthday_start=2005-01-01')
    }
}