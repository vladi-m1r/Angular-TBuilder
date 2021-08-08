import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {

  @Output() selectedFriend = new EventEmitter<any>();
  @Output() changeToChat = new EventEmitter<string>();

  private friend:any;

  constructor() { }

  ngOnInit(): void {
    this.friend = {
      id: "1",
      nickname: 'lam.Child'
    }
  }

  clickFriend(){
    this.changeToChat.emit("Chat");    
  }

}
