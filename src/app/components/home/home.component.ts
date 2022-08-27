import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  buttonName: string= 'Delete';
  style: any = {'btn-danger': true};
  numberVegan: any = this.cartaService.vegan;
  numberNoVegan: any = this.cartaService.noVegan;

  get platosGuardados(): any[] {
    return this.cartaService.platosGuardados;
  }
  
  get totalPlatos(): number {
    let total:number = 0;
    for(let precio of this.platosGuardados){
      total += precio.pricePerServing
    }
    return total
  }
  
  get promedioTiempo():number {
    const sum = this.platosGuardados.reduce((sum, plato) => {
      return sum + plato.readyInMinutes;
    }, 0);
    let platos = this.platosGuardados.length
    return (platos > 0 ? sum / platos : platos);
  }

  get promedioScore():number {
    const sum = this.platosGuardados.reduce((sum, plato) => {
      return sum + plato.healthScore;
    }, 0);
    let platos = this.platosGuardados.length
    return (platos > 0 ? sum / platos : platos);
  }

  constructor( private cartaService:MenuService) { }

  ngOnInit() {

  }

  borrar( plato: any){
    this.cartaService.borrarPlatos(plato);

    if(plato.vegan && this.numberVegan.value == 1){
      this.cartaService.vegan.next(0);
    } else if (plato.vegan && this.numberVegan.value == 2){
      this.cartaService.vegan.next(1);

    } else if (!plato.vegan && this.numberNoVegan.value == 1){
      this.cartaService.noVegan.next(0);
    } else {
      this.cartaService.noVegan.next(1)
    }

  }
}
  