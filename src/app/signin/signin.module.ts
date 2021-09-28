import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
     ReactiveFormsModule,
     NavbarModule
  ],
  exports:[
    LoginComponent
  ]
})
export class SigninModule { }
