import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor() { 
    console.log('BasicAuthHtppInterceptorService constructor');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('intercept');

    // if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization:  localStorage.getItem('token') 
        }
      })
    // }
    return next.handle(req); 

  }
}
