import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject, ReplaySubject} from 'rxjs';

import {map, distinctUntilChanged} from 'rxjs/operators';
import {User} from '../core/models';
import {ApiService, JwtService, UserService} from '../core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private jwtService: JwtService
  ) {
  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
        .subscribe(
          data => this.setAuth(data.user),
          err => this.purgeAuth()
        );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.userService.setUser(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.userService.logoutUser();
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
    //
  }

  attemptAuth(credentials): Observable<User> {
    return this.apiService.post('/users/login/', {user: credentials})
      .pipe(map(
        data => {
          this.setAuth(data.user);
          // redirect to home or to setRedirectUrl
          return data;
        }
      ));
  }

  attemptRegistration(credentials): Observable<User> {
    return this.apiService.post('/users/', {
      user: credentials,
      'username': credentials.username,
      'email': credentials.email,
      'password': credentials.password,
    })
      .pipe(map(
        data => {
          this.setAuth(data.user);
          // redirect to home or to setRedirectUrl
          return data;
        }
      ));
  }


  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  handleErrorObservable(error: Response | any) {
    return Observable.throw(error.message || error);
  }


}
