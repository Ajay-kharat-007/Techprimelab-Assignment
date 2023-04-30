import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/project-data.service';

@Component({
  selector: 'app-insert-project',
  templateUrl: './insert-project.component.html',
  styleUrls: ['./insert-project.component.scss']
})
export class InsertProjectComponent {

  constructor(private _service: ProjectDataService, private _router: Router) { }

  projectForm = new FormGroup({
    projectName: new FormControl(""),
    reason: new FormControl('Business'),
    type: new FormControl('Internal'),
    division: new FormControl('Filters'),
    category: new FormControl('Quality A'),
    priority: new FormControl('High'),
    department: new FormControl('Strategy'),
    sdate: new FormControl('Jun-21, 2020'),
    edate: new FormControl('Jan-01, 2021'),
    location: new FormControl('Pune'),
    status: new FormControl('Registered')
  })

  ram:boolean = false;

  getData() {
    if (this.projectForm.valid) {
      this._service.postData(this.projectForm.value).subscribe((res) => {
        console.log(res)
      })
      this.ram = true
      setTimeout(() => {
        this._router.navigateByUrl('/listing')
      }, 1000);
    }
  }
}
