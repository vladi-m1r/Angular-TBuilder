import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit, OnChanges{

  @Output() response = new EventEmitter<string>();
  @Input() profileID:any;
  teams:any;

  constructor(private service:DataService) {
    console.log(this.profileID);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.profileID = changes.profileID.currentValue;
    this.loadTeams();
  }

  ngOnInit(): void {
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
