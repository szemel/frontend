import { Injectable } from '@angular/core';
import {ApiService} from '../../core/services';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
  private apiService: ApiService
  ) {}

  getArticle(id: number) {
    this.apiService.get('articles/' + id).subscribe(x => console.log(x));
    return null;
  }
}
