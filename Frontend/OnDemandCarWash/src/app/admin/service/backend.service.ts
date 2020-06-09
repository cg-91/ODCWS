import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const backendApi = environment.backendApi;
const frontendApi1 = environment.frontendApi1;

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private client : HttpClient) { 

  }

  getAllCustomer(){
    return this.client.get<any>(frontendApi1 + 'customerList');
  }

  getAllWasher(){
    return this.client.get<any>(frontendApi1 + 'washerlist');
  }

  getAllCar(){
    return this.client.get<any>(frontendApi1 + 'car/carlisting');
  }

  getAllAddOn(){
    return this.client.get<any>(frontendApi1 + 'addon/addonlisting');
  }

  getAllPromoCode(){
    return this.client.get<any>(frontendApi1 + 'promocode/pclisting');
  }

  getAllServicePlan(){
    return this.client.get<any>(frontendApi1 + 'serviceplan/splisting');
  }

}




// private handleError<T>(operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {

//       console.log(error); // log to console instead

//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//   };
// }
