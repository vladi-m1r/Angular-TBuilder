import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './chat.css', './profile.css']
})
export class MainComponent implements OnInit {

  token:any;

  perfil:any;


  constructor(private route:Router, private servicio:DataService) { 
    console.log("Component-starts")
  }

  ngOnInit(): void {
    let token:any;
    token = localStorage.getItem('currentUser');

    this.perfil = {
      'usuario': "",
      'id_perfil': "",
      'nickname': "Anonymous",
    };

    console.log(this.perfil);
    this.servicio.loginWithToken(token).subscribe(
      data => {
        this.perfil = data.perfil;
        console.log(this.perfil)
      },
      error =>{
        this.route.navigate(['login']);
      }
    );
  }

  public isShow = false;

  checkSettingShow(){
    console.log("click en profile button")
    this.isShow = !this.isShow;
  }

  cerrarSettings(){
    console.log("Cerrado")
    this.isShow = false;
  }

  logout(){
    localStorage.removeItem("currentUser");
    this.route.navigate(["login"]);
  }

  public showAmigos = true;

  ocultarAmigos(){
    console.log("Ocultadando amigos...");
    this.showAmigos = !this.showAmigos;
  }

  testEvent(data:any){
    console.log(data);
  }

  public isShowTeams = false;

  showTeams(){
    console.log("Mostrando equipos");
    this.isShowTeams = !this.isShowTeams;
  }

  public isShowClans = false;

  showClans(){
    console.log("Mostrando clanes");
    this.isShowClans = !this.isShowClans;
  }
}
