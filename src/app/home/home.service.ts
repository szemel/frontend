import { Injectable } from '@angular/core';

import { ApiService, JwtService } from '../core/services';
import {map} from "rxjs/operators";


@Injectable()

export class HomeService {
  constructor(
    private apiService: ApiService,
    private jwtService: JwtService
  ) {}

  allArticles() {
    this.apiService.get('/articles')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
