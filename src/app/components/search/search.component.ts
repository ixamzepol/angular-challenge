import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { PlatoI } from '../../models/plato.interface';
import { MenuService } from '../../services/menu.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() plato!:any;
  @Output() boton: EventEmitter<PlatoI> = new EventEmitter();
  
  buttonName: string= 'Add';
  style= {'btn-success': true};

  event(){
    this.boton.emit(this.plato);
  }



  termino = new FormControl('', [Validators.minLength(2)]);

  

  plato1: PlatoI= { "results": [ { "vegetarian": false, "vegan": false, "glutenFree": false, "dairyFree": false, "veryHealthy": false, "cheap": false, "veryPopular": false, "sustainable": false, "lowFodmap": false, "weightWatcherSmartPoints": 13, "gaps": "no", "preparationMinutes": -1, "cookingMinutes": -1, "aggregateLikes": 1, "healthScore": 9, "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit", "license": "CC BY 3.0", "sourceName": "Foodista", "pricePerServing": 141.5, "id": 654991, "title": "Pastitsio", "readyInMinutes": 45, "servings": 12, "sourceUrl": "https://www.foodista.com/recipe/FYZF5573/pastitsio", "image": "https://spoonacular.com/recipeImages/654991-312x231.jpg" }] };

  busqueda: PlatoI= {...this.plato1};
  numberVegan:any = this.cartaService.vegan;
  numberNoVegan: any = this.cartaService.noVegan;

  debouncer: Subject<string> = new Subject();

  public platosGuardados: any[] = this.cartaService.platosGuardados;
  constructor(private cartaService: MenuService) { }

  ngOnInit(): void {

  }

 


  buscar() {
    if(this.termino.invalid){
      console.log('invalido');
      return
    }

    this.cartaService.getPlatos(this.termino.value!)
      .subscribe( platos => {
        this.busqueda = platos;
      })
  }
  press(){
    this.debouncer.next(this.termino.value!);
  }
showModal() {
  Swal.fire({
    icon: 'success',
    title: 'Error',
    text: 'Maximo 2 platos de cada tipo',
    footer: 'Seleccione un plato de otra categoria'
  })
}




agregar( plato:any ){
  if(plato.vegan && this.numberVegan.value == 0){
    this.cartaService.noVegan.next(1);
    this.cartaService.agregarPlatos(plato);
  } else if (plato.vegan && this.numberVegan.value == 1){
    this.cartaService.noVegan.next(2);
    this.cartaService.agregarPlatos(plato);
  }
  else if (!plato.vegan && this.numberNoVegan.value == 0){
    this.cartaService.noVegan.next(1);
    this.cartaService.agregarPlatos(plato);
  }

  else if(!plato.vegan && this.numberNoVegan.value == 1){
    this.cartaService.noVegan.next(2);
      this.cartaService.agregarPlatos(plato);
  } else {
   Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Maximo 2 platos de cada tipo',
    footer: 'Seleccione un plato de otra categoria'
  })
}
}
}