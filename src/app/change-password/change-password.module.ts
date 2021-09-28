import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TopbarComponent } from '../navbar/topbar/topbar.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    // TopbarComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  
  ],
  exports:[
    ForgotPasswordComponent,
  ]
})
export class ChangePasswordModule { }
