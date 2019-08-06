import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
  article: any;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.article = this.articleService.getArticle(this.getArticleId());
  }
  getArticleId() {
    return this.route.snapshot.params.id;
  }

}
