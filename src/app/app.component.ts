import { Component, Input } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  token:any;

  constructor(private rutas:AppRoutingModule, private servicio:DataService){

  }
}
