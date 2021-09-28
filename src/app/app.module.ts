import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderModule } from './header/header.module';
import { SigninModule } from './signin/signin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ HttpClientModule} from '@angular/common/http';
import { ChangePasswordModule } from './change-password/change-password.module';

import { SignupModule } from './signup/signup.module';
import { NavbarModule } from './navbar/navbar.module';
// import { MatExpansionPanel } from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    NgbModule,
    SigninModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    ChangePasswordModule,
    SignupModule,
   
  //  MatExpansionPanel
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
