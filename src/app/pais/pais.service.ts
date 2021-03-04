import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from "./interfeces/pais.interface";
import { Capital } from "./interfeces/capital.interface";
import { Regiones } from "./interfeces/region.interfece";

@Injectable({
  providedIn: 'root'
})
export class PaisService {
private apiUrl:string="https://restcountries.eu/rest/v2"
  constructor(private http:HttpClient) { }


  buscarPais(termino:string):Observable<any>{
    const url=`${this.apiUrl}/name/${termino}`;
    //return this.http.get(url);
    return this.http.get<Country []>(url);
  }


  buscarCapital(termino:string):Observable<any>{
    const url=`${this.apiUrl}/capital/${termino}`;
    //return this.http.get(url);
    return this.http.get<Capital []>(url);
  }


  buscarRegion(termino:string):Observable<any>{
    const url=`${this.apiUrl}/region/${termino}`;
    //return this.http.get(url);
    return this.http.get<Regiones []>(url);
  }
}
