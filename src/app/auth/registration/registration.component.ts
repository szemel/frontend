import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {UserService} from '../../core/services';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  isSubmitting = false;
  submitted = false;
  redirectTo: string = '/';
  registrationForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private fb: FormBuilder,
    private formBuilder: FormBuilder,
  ) {
    // use FormBuilder to create a form group
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', Validators.required],
    });
  }


  ngOnInit() {
    if (this.route.snapshot.paramMap.get('redirectTo'))
      this.redirectTo = this.route.snapshot.paramMap.get('redirectTo');
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }


  submitForm() {
    console.log('SUBMIT FORM REGISTRATION');
    this.isSubmitting = true;
    this.submitted = true;

    const credentials = this.registrationForm.value;
    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }
    this.authService.attemptRegistration(credentials).subscribe((a) => {
      this.router.navigate([this.redirectTo]);
    }, (a) => {
      console.log('ERROR:');
      console.log(a);
    });
  }
}
