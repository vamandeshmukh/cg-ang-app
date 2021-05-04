import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: any;

  constructor(private httpClient: HttpClient) {
    console.log('AuthenticationService constructor');
  }

  authenticate(username, password) {
    console.log(username, password);
    return this.httpClient.post<any>(`http://localhost:8090/login`, { username, password })
      .pipe(
        map(data => {
          localStorage.setItem('token', JSON.stringify(data.token));
          console.log(localStorage.getItem('token'));
          return data;
        }));
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}

