import {AuthService} from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'fronty2';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.populate();
  }
}
