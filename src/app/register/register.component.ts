import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario:any;
  token:any;

  constructor(private servicio:DataService, private router:Router) {}

  ngOnInit(): void {
    console.log("Login-component iniciado")
    this.usuario = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      password1: "",
      birthday: "",
      email: "",
      gender: "",
    }
  }

  register(){
    if(this.usuario.password != this.usuario.password1){
      console.log("Las contraseñas no son iguales")
    }else{
      this.servicio.register(this.usuario).subscribe(
        data =>{
          alert("Se registro el usuario");
          this.router.navigate(['login'])
        },
        error =>{
          alert("No se pudo registrar")
        }
      );
    }
  }
}
