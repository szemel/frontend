import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: [];
  constructor() { }

  ngOnInit() { }

}
