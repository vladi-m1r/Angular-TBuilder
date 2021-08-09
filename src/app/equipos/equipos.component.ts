import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  @Output() response = new EventEmitter<string>();
  @Input() profileID = 5;

  teams:any;

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.loadTeams();
  }

  changeToCreateTeam(){
    this.response.emit("CreateTeam");
  }

  loadTeams(){
    this.service.getTeamsForProfile(this.profileID).subscribe(
      data=>{
        alert("Se cargo los equipos");
        this.teams = data['perfilesEquipo'];
        console.log(this.teams);
      },
      error=>{
        alert("No se pudo cargar los equipos");
      }
    );
  }
}
