import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth.service';
import {UserService} from '../../core/services';

// @ts-ignore
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  isSubmitting = false;
  redirectTo:string='/';
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('redirectTo'))
    this.redirectTo = this.route.snapshot.paramMap.get('redirectTo');
  }

  submitForm() {
    this.isSubmitting = true;
    const credentials = this.authForm.value;
    this.authService.attemptAuth(credentials).subscribe((a) => {
      this.router.navigate([this.redirectTo]);
    },(a)=>{});
  }
}
