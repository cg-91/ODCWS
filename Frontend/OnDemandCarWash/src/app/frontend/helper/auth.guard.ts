import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../service/index'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public isLoggedIn: boolean = false;
  public redirectUrl: String;

  constructor(private router: Router,
    private auth: AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      const token = localStorage.getItem('token');
      if(token == '' || token == undefined){
        this.router.navigate(['/login']);
      }
      return true;
  }
}
