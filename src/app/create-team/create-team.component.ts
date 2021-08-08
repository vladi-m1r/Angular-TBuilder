import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  @Output() changeCreateTeam = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log("Create Team Component - Inicied");
  }

  viewCreateTeam(){
    this.changeCreateTeam.emit();
  }

}
