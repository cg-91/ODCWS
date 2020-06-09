import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const frontendApi1 = environment.frontendApi1;

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private client: HttpClient) { }

  createCar(car): Observable<any>{
    return this.client.post<any>(frontendApi1 + 'car/store', car).pipe(
      map(response=>{
        return response;
      })
    )
  }
}
