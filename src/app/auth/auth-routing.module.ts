import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoAuthGuard} from './no-auth-guard.service';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
