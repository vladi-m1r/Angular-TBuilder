import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private servicio: DataService, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkLogin();
  }

  //https://stackoverflow.com/questions/56865191/angular-auth-guard-with-subscribe
  checkLogin():Observable<boolean>|boolean{
    return new Observable<boolean>(obs =>{
      var token:any;
      token = localStorage.getItem('currentUser');
      this.servicio.loginWithToken(token).subscribe(
        data => {
          obs.next(true);
        },
        error =>{
          this.router.navigate(['login']);
          obs.next(false);
        }
      );
    })
  }
}
