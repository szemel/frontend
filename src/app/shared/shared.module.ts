import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { CommentComponent } from './comment/comment-list/comment-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ArticlePreviewComponent,
    CommentComponent
  ],
  exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class SharedModule { }
