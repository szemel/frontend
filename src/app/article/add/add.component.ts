import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  articleForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.articleForm = this.fb.group({
      'header': [''],
      'contentPol': [''],
      'image': ['']
    })
  }

  ngOnInit() {
  }

}
