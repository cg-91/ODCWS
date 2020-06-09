import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

 const frontendApi1 = environment.frontendApi1;

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  constructor(private client: HttpClient) { }
  
  createAddOn(addon): Observable<any>{
    return this.client.post<any>(frontendApi1 + 'addon/store', addon).pipe(
      map(response=>{
        return response;
      })
    )
  }
}
