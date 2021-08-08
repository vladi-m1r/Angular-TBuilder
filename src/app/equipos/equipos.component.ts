import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  @Output () response = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  changeToCreateTeam(){
    this.response.emit("CreateTeam");
  }
}
