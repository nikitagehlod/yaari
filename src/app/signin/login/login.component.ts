import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { Router} from '@angular/router'
import { observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private register:RegisterService,private router:Router) { }

  

  lForm=new FormGroup ({
    email:new FormControl(''),
    password:new FormControl(''),
  })


 ngOnInit(): void {
}
signin()
{ 

  console.log("hello")
  this.register.check(this.lForm.value).subscribe((res:any) => {
   
    console.log(res)
  });
  

}

}
