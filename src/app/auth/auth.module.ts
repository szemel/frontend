import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import {NoAuthGuard} from './no-auth-guard.service';
import { LoginComponent } from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}
