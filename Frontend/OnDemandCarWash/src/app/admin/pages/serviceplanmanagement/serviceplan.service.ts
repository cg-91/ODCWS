import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const frontendApi1 = environment.frontendApi1;

@Injectable({
  providedIn: 'root'
})
export class ServiceplanService {

  constructor(private client: HttpClient) { }

  createSP(serviceplan): Observable<any>{
    return this.client.post<any>(frontendApi1 + 'serviceplan/store', serviceplan).pipe(
      map(response=>{
        return response;
      })
    )
  }
}
