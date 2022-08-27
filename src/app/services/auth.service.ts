import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginI } from '../models/login.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 token:any;
  constructor(private http: HttpClient) {
    this.leerToken();
   }
   logout(){
    localStorage.removeItem("token");
   }
   loginUser(credential): Observable<LoginI>{
          const url = `http://challenge-react.alkemy.org/`
          const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
          const body= credential
          return this.http.post<any>(url,body, {headers})
                          .pipe(
                            map(resp => {
                                this.guardarToken(resp['token']);
                                return resp;
                            })
                          )
    }
    guardarToken(token:string){
        this.token= token;
        localStorage.setItem("token", token);  
        console.log('Token', token);   
    }
    leerToken(){
        if (localStorage.getItem("token")){
            this.token= localStorage.getItem("token");} 
            else {
          this.token= ""; }
        return this.token; }
    estaAutenticado():boolean {
      return this.token.length > 2;
    }


}