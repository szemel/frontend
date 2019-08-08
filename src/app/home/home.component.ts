import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  comments = [
    {
      author: 'jarek',
      body: 'text'
    },
    {
      author: 'jarek2',
      body: 'text text text'
    },
    {
      author: 'jarek3',
      body: 'text text texttext'
    }
  ];

  constructor(
    private router: Router,
  ) {}
}
