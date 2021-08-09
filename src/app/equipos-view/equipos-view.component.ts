import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-equipos-view',
  templateUrl: './equipos-view.component.html',
  styleUrls: ['./equipos-view.component.css']
})
export class EquiposViewComponent implements OnInit {

  teams:any;

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getTeams().subscribe(
      data=>{
        this.teams = data['results'];
        console.log(this.teams);
      },
      error=>{
        alert("No se pudo cargar la lista de equipos");
      }
    )
  }

}
