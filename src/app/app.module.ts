import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import  {MatDialogModule} from '@angular/material/dialog';
import  {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleComponent } from './components/detalle-plato/detalle-plato.component';
import { PlateComponent } from './components/plate/plate.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  imports:      
  [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, MatDialogModule, MatButtonModule],
  declarations: 
  [ AppComponent, HelloComponent, routingComponents, DetalleComponent, PlateComponent, HomeComponent, NavbarComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
