import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Addon } from '../pages/addonmanagement/addon';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<Addon>;
  public currentUser: Observable<Addon>;

  constructor(private route: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Addon>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Addon {
    return this.currentUserSubject.value;
  }

  isUserLoggedIn(): boolean{
    return localStorage.getItem('token') ? true : false;
  }


  // userAuth(username, password){
  //   if(username === 'admin@gmail.com' || password === 'admin'){
  //    // sessionStorage.setItem('authUser',username);
  //   //  console.log('entered in if block - auth');
  //       this.route.navigate(['/admin']);
  //     return true;

  //   }else{
  //   //  console.log('entered in else block - auth');
  //   this.route.navigate(['/login']);
  //     return false;
  //   }
  // }

  // loggedIn(){
  //   let user = sessionStorage.getItem('authUser');
  //   return !(user == null);
  // }

  // loggedOut(){
  //   sessionStorage.removeItem('authUser');
  // }





}
