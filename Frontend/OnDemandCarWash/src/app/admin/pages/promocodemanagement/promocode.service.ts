import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const frontendApi1 = environment.frontendApi1;

@Injectable({
  providedIn: 'root'
})
export class PromocodeService {

  constructor(private client: HttpClient) { }

  createPromoCode(promocode): Observable<any>{
    return this.client.post<any>(frontendApi1 + 'promocode/store', promocode).pipe(
      map(response=>{
        return response;
      })
    )
  }
}
