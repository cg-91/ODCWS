import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

const backendApi = environment.backendApi;
const frontendApi = environment.frontendApi;
const frontendApi1 = environment.frontendApi1;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  signUp(obj): Observable<any>{
    if(obj.role === 'customer'){
      return this.http.post(frontendApi + '/auth/signup', obj).pipe(
        map(response=>{
          return response;
        })
      )
    } else if(obj.role === 'washer'){
      return this.http.post(backendApi + '/auth/signup', obj).pipe(
        map(response=>{
          return response;
        })
      )
    }
  }

  signIn(user): Observable<any>{
    if(user.role === 'customer'){
      return this.http.post(frontendApi + 'auth/login', user).pipe(
        map(response=>{
          return response;
        }),
      )
    }else if(user.role === 'washer'){
      return this.http.post(backendApi + 'auth/login', user).pipe(
        map(response=>{
          return response;
        }),
      )
    }
    else if(user.role === 'admin'){
      console.log(user);
      
      return this.http.post(frontendApi1 + 'auth/login', user).pipe(
        map(response=>{
          return response;
        }),
      )
    }
  }

  // loggedIn(){
  //   let user = sessionStorage.getItem('');
  //   return !(user == null);
  // }

  // loggedOut(){
  //   sessionStorage.removeItem('');
  // }
}
