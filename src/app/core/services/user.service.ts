import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import {User} from '../models/user.model';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {}


  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject.value.token != undefined;
  }

  logoutUser() {
    this.currentUserSubject.next({} as User);
  }

  setUser(user: User){
    this.currentUserSubject.next(user);
  }

//  todo add routing to user profile
//  todo retrieve user from backend

}
