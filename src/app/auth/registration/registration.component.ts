import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth.service';
import {UserService} from '../../core/services';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  isSubmitting = false;
  redirectTo:string='/';
  registrationForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.registrationForm = this.fb.group({
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'retypepassword': ['', Validators.required],
      
    });
  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('redirectTo'))
    this.redirectTo = this.route.snapshot.paramMap.get('redirectTo');
  }

  submitForm() {
    debugger
    this.isSubmitting = true;
    const credentials = this.registrationForm.value;
    this.authService.attemptAuth(credentials).subscribe((a) => {
      this.router.navigate([this.redirectTo]);
    },(a)=>{debugger});
  }
}
