import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  token: any;
  public isLoggedIn = new BehaviorSubject('');

  constructor() { }

  checkLogin(val: any): Observable<any> {
    const tokenValue = localStorage.getItem('token');
    if(tokenValue === null){
      val = false;
    }else{
      val = true;
    }
    this.isLoggedIn.next(val);
    return this.isLoggedIn.asObservable();
  }

  isUserLoggedIn(): boolean{
    return localStorage.getItem('token') ? true : false;
  }
}
