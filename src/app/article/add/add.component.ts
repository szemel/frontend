import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../core/services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


@Component({
  selector: 'app-add-article-form',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  addArticleForm: FormGroup;
  file: File;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.addArticleForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  handleUpload(e) {
    this.file = e.target.files[0];
  }

  checkForm() {}

  submitForm() {
    const article = this.addArticleForm.value;
    console.log(article);
    this.checkForm();
    const formData: FormData = new FormData();
    formData.append('title', article.title);
    formData.append('body', article.body);
    formData.append('image', this.file, this.file.name);

    this.http.post(`${environment.api_url}/articles/`,
    formData).pipe(catchError((err => throwError(err)))).subscribe();

  }
}
