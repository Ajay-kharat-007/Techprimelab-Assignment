import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/project-data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private _service: ProjectDataService, private builder: FormBuilder, private toastr: ToastrService) { }

  result: any;

  loginForm = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  proceedLogin() {
    if (this.loginForm.valid) {
      this._service.getDataById(this.loginForm.value.id).subscribe((res) => {
        this.result = res;
        if (this.result.password === this.loginForm.value.password) {
          sessionStorage.setItem('username', this.result.id);
          sessionStorage.setItem('pass', this.result.password);
          this.router.navigateByUrl('/dashboard')
          this.toastr.success(`welcome ${this.result.id}`, 'Login Successfully !!')
        }
        else {
          this.toastr.error('Invalid Password')
        }
      });
    } else if (this.loginForm.invalid) {
      this.toastr.warning('Please enter valid data.')
    }
  }
}
