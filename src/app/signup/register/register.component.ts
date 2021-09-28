import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { Router} from '@angular/router'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private register:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
   

  create_account=new FormGroup ({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
    password:new FormControl(''),
  })
 userExist=false;
 signup(val:any)
 { 
   
  //  console.log("hellooooooooooooooooooooooooooooo")
   this.register.save(val).subscribe((res:any) => {
     this.userExist=true
     console.log(res)
    });
    
    
  }
//   ngOnInit(): void {
//  }
}
