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
      console.log('if');
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
    // }

    return next.handle(req);

  }
}
