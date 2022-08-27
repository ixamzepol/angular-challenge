import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

interface Auth {
  email: string;
  password: string;
  token?: string
}

@Injectable({
  providedIn: 'root'
})
export class Login1Service {

  private url: string = 'https://reqres.in/api/login'

  constructor( private http: HttpClient) { }

  logear( email: string, password: string ): Observable<Auth> {
    const datos = {
      email: email,
      password: password
    }
    console.log(email, password)
    return this.http.post<any>(this.url, datos);

  }

  verificaAutenticacion(): Observable<boolean> {
    if(!localStorage.getItem('token')) {
      return of(false);
    } else{ return of(true) }
     

    
  }

}
