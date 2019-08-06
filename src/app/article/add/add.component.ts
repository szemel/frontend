import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../core/services';
import {HttpClient} from '@angular/common/http';


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
  get title() {return this.addArticleForm.get('title')}
  get body() {return this.addArticleForm.get('body')}

  handleUpload(e) {
    this.file = e.target.files[0];
  }

  formValid() {
    return !(this.addArticleForm.errors && this.file);
  }

  submitForm() {
    const article = this.addArticleForm.value;
    if (this.formValid()) {
      const formData: FormData = new FormData();
      formData.append('title', article.title);
      formData.append('body', article.body);
      formData.append('image', this.file, this.file.name);
      this.apiService.postRaw('articles/', formData).subscribe();
    }
  }
}
