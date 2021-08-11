import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-equipo',
  templateUrl: './main-equipo.component.html',
  styleUrls: ['./main-equipo.component.css']
})
export class MainEquipoComponent implements OnInit {

  selectedComponent:string = "Profile";

  constructor() { }

  ngOnInit(): void {
  }

  changeComponentView(data:string){
    this.selectedComponent = data;
  }
}
