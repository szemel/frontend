import {Component, Input, OnInit} from '@angular/core';
import { CommentModel } from "../../../core/models/comment.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass']
})
export class CommentComponent implements OnInit {

  @Input() comments:Array<CommentModel>;

  constructor() { }

  ngOnInit() {
  }

}
