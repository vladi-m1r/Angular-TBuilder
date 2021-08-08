import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:any;
  token:any;

  constructor(private servicio:DataService, private router:Router) {}

  ngOnInit(): void {
    console.log("Login-component iniciado")
    this.usuario = {
      username: "",
      password: "",
    }
  }

  login(){
    console.log(this.usuario);
    this.servicio.login(this.usuario).subscribe(
      data=>{
        localStorage.setItem('currentUser', JSON.stringify({ token: data.token}));
        this.router.navigate(['mainApp']);
      },
      error =>{
        alert("No se pudo loguear");
      }
    );
  }
}
