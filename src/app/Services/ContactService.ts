import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../Environment/environment";


@Injectable()

export class ContactService {

    apiUrl = environment.apiUrl;
    constructor (private _http:HttpClient){
      
       
    }

     getAllContacts(): Observable<any> {
      //   const token = localStorage.getItem('APIToken');
      //    let headers = new HttpHeaders().set("Authorization","bearer"+token)
      //   return this._http.get<any>(`${this.apiUrl}/Contact`,{headers:headers});
         return this._http.get<any>(`${this.apiUrl}/Contact`);
      
      }

     SaveContact(data:any){
        return this._http.post<any>(`${this.apiUrl}/Contact`,data);
     }

     getContactById(id:number): Observable<any> {
        return this._http.get<any>(`${this.apiUrl}/Contact/`+id);
       //  return this._http.get<any>('https://localhost:7187/api/Contact');
     }

     UpdateContact(id:number,data:any){
      return this._http.put<any>(`${this.apiUrl}/Contact/`+id,data);
   }
}

