import { Component, OnInit, Input } from '@angular/core';
import {ArticlePreviewModel} from '../../core/models/article-preview.model';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.sass']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() data: ArticlePreviewModel;

  constructor() { }

  ngOnInit() {
  }

}
