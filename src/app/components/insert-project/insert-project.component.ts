import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/project-data.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-insert-project',
  templateUrl: './insert-project.component.html',
  styleUrls: ['./insert-project.component.scss']
})
export class InsertProjectComponent {

  constructor(private _service: ProjectDataService, private _router: Router, private toastr: ToastrService) { }

  projectForm = new FormGroup({
    projectName: new FormControl("", Validators.required),
    reason: new FormControl('Business', Validators.required),
    type: new FormControl('Internal', Validators.required),
    division: new FormControl('Filters', Validators.required),
    category: new FormControl('Quality A', Validators.required),
    priority: new FormControl('High', Validators.required),
    department: new FormControl('Strategy', Validators.required),
    sdate: new FormControl('Jun-21, 2020', Validators.required),
    edate: new FormControl('Jan-01, 2021', Validators.required),
    location: new FormControl('Pune', Validators.required),
    status: new FormControl('Registered', Validators.required)
  })

  ram: boolean = false;

  getData() {
    if (this.projectForm.valid) {
      this._service.postData(this.projectForm.value).subscribe((res) => {
        console.log(res)
      })
      this.ram = true
      this.toastr.success('Project Registered Successfully !!')
      setTimeout(() => {
        this._router.navigateByUrl('/listing')
      }, 1000);
    }else if(this.projectForm.invalid){
      this.toastr.warning("Enter valid data !!")
    }
  }
}
