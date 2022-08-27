import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlatoI } from '../../models/plato.interface';
import { DetalleComponent } from '../detalle-plato/detalle-plato.component';

@Component({
  selector: 'plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {
  @Input() plato!:any;
  @Input() buttonName!:any;
  @Input() i!:number;
  @Output() boton: EventEmitter<PlatoI> = new EventEmitter();

  @Input() style = {};

  buscar:boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  event(){
    this.boton.emit(this.plato);
  }

  openDialog(): void {
    this.dialog.open(DetalleComponent, {
      data: this.plato,
    });
  }

}