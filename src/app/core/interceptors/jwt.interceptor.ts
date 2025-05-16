import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthenticationService } from "../services/authentication.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // debugger


    if (this.authService.estaLogueado()) {
      let token = localStorage.getItem('token');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          // "Ocp-Apim-Subscription-Key": environment.key_ApiManagement
        },
      });
    } else {

      if(this.router.url != '/recuperar-clave') 
        this.router.navigate(['/login']);
      // request = request.clone({
      //   setHeaders: {
      //     // 'Ocp-Apim-Subscription-Key': environment.key_ApiManagement
      //   },
      // });
    }

    return next.handle(request);
  }

}