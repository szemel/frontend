import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService, JwtService} from '../../core/services';
import {HttpHeaders} from '@angular/common/http';
import {Article} from '../article'
@Component({
  selector: 'app-add-article-form',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  addArticleForm: FormGroup;
  article: Article = new Article();

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private jwtService: JwtService
  ) {
    this.addArticleForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  handleUpload(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    console.log(this.article);
    this.article.image = file;
    console.log(this.article.image);
  }
  submitForm() {
    this.article = this.addArticleForm.value;
    this.apiService.post('articles/', this.article).subscribe();
  }
}
