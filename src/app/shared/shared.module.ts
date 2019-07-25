import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, ArticlePreviewComponent],
  exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
