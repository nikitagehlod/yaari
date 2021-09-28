import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MatMenuTrigger } from '@angular/material/menu';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatExpansionModule} from '@angular/material/expansion'
import { NavComponent } from './nav/nav.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ChangePasswordModule } from '../change-password/change-password.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    TopbarComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    // MatMenuModule,
    CommonModule,
    // MatMenuTrigger,
   
    // MatExpansionModule
  ],
  exports:[
    TopbarComponent,
    NavComponent,
    FooterComponent
  ]
})

export class NavbarModule { }
