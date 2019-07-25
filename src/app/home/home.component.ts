import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlePreviewComponent } from '../shared/article-preview/article-preview.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(
    private router: Router,
  ) {}


}
