import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){}

  loginUser(data:any){
    console.log(data)
    if(data.email === "Ajay007" && data.password === "Ajay@123"){
      this.router.navigateByUrl('/dashboard')
    }
  }
}
