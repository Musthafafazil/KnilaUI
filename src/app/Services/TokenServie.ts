import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../Environment/environment";


@Injectable()

export class TokenServie {

    apiUrl = environment.apiUrl;
    constructor (private _http:HttpClient){

    }

     getToken(): Observable<any> {
         return this._http.get<any>(`${this.apiUrl}/Token`);
      }

}