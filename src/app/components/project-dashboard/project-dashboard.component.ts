import { Component } from '@angular/core';
import { ProjectDataService } from 'src/app/project-data.service';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent {

  data: any;
  total = 0;
  closed = 0;
  running = 0;
  cancelled = 0;
  registered = 0;

  arr = ["nothing"]

  constructor(private _service: ProjectDataService) {
    this._service.getData().subscribe((res) => {
      this.data = res
      console.log(this.data)
      this.data.map((res: any) => {
        console.log(res.status)
        this.arr.push(res.status)
      })
      console.log(this.arr)
      this.total = this.arr.length - 1
      this.arr.map((res) => {
        if (res === 'Running') {
          this.running++
        } else if (res === 'Closed') {
          this.closed++
        } else if (res === 'Cancelled') {
          this.cancelled++
        } else if(res === 'Registered'){
          this.registered++
        }
      })
    })
  }

}
