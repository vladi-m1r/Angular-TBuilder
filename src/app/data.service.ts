import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Usuario } from './main/Usuario';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "http://localhost:8000/";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) {}

  login(user:any): Observable<any>{
    return this.http.post(this.baseUrl + 'cuentas/entrar/', user, {headers: this.httpHeaders});
  }

  register(user:any): Observable<any>{
    return this.http.post(this.baseUrl + 'cuentas/usuarios/', user, {headers: this.httpHeaders});
  }

  loginWithToken(token:any): Observable<any>{
    return this.http.post(this.baseUrl + 'cuentas/verifyToken/', token, {headers: this.httpHeaders});
  }
}
