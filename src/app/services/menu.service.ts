import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { PlatoI } from '../models/plato.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _baseUrl: string = 'https://api.spoonacular.com/recipes/complexSearch';
  private _apiKey: string = 
  'caff137ad7b247199bf5834bb456f0c0&';
  
  private _platosGuardados: any[] = [];
 
  public vegan = new BehaviorSubject<number>(0);

  noVegan = new BehaviorSubject<number>(0);


get platosGuardados():any[] {
    return [ ...this._platosGuardados ]
  }


  constructor(private http: HttpClient) { }

  getPlatos( termino: string ): Observable<PlatoI> {
    return this.http.get<PlatoI>(`${this._baseUrl}/?query=${termino}&apiKey=${this._apiKey}&addRecipeInformation=true`)
  }

  agregarPlatos( plato: any ) {
    this._platosGuardados.push(plato)
  }

  borrarPlatos( plato: PlatoI ) {
    
    const platoABorrar = (element:PlatoI) => element == plato;
    this._platosGuardados.splice(this._platosGuardados.findIndex(platoABorrar), 1);
  }

}