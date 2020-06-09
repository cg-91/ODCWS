import { Injectable, Inject, forwardRef } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { error } from '@angular/compiler/src/util';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService,
        private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(request).do(
            (event: HttpEvent<any>) => {
                if(event instanceof HttpResponse){

                }

            },
            (err: any) => {
                if(err instanceof HttpErrorResponse){
                    if(err.status>400 && err.status<404){
                        console.error('401-403: Unauthorised Access');
                    }else if(err.status == 500){
                        console.error(err.status, 'Server Error');
                    }else if(err.status == 429){
                        console.error(err.status, 'Too Many attempt');
                    }
                }
            }
        )
    }
}