import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService, JwtService} from '../../core/services';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-article-form',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  addArticleForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private jwtService: JwtService
  ) {
    this.addArticleForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit() {
  }

  submitForm() {
    const article = this.addArticleForm.value;
    this.apiService.post('articles/', article).subscribe();
  }
}
