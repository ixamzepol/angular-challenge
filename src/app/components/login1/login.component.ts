import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Login1Service } from '../../services/login1.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    email: [ , [ Validators.required, Validators.minLength(1), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ] ],
    password: [ , [Validators.required, Validators.minLength(1) ]]
  })

  clicked: boolean = false;

  constructor( private fb:FormBuilder,
               private loginService: Login1Service,
               private router: Router) { }

  ngOnInit(): void {
  }

  
  logear() {

    if(this.miFormulario.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incorrectos',
        footer: 'Revise que haya ingresado los datos correctamente'})
      return;
    }
    this.clicked= true;
    this.loginService.logear(this.miFormulario.controls['email'].value,this.miFormulario.controls['password'].value)
      .subscribe( info => {
        localStorage.setItem('token', info.token!);
        this.clicked= false;
        this.router.navigate(['./search']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos incorrectos',
          footer: 'Email o contraseña inválidos'})
        this.clicked= false;
    })
  }

}