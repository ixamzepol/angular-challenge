import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login1/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [ 
  {path: '', redirectTo: 'login1', pathMatch: 'full'},
  {path: 'login1', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent}

];

  


@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, NavbarComponent, HomeComponent, SearchComponent] //buena practica