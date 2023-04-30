import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectDataService } from 'src/app/project-data.service';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss']
})
export class ProjectListingComponent implements OnInit{

  displayedColumns: string[] = [
    'projectName',
    'reason',
    'type',
    'division',
    'category',
    'priority',
    'department',
    'location',
    'status',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _service : ProjectDataService) { }

  ngOnInit(): void {
    this.getProjectList()
  }

  getProjectList() {
    this._service.getData().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res)
      },
      error: console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  startProject(id:any){
    this._service.updateData(id, "Running").subscribe((res)=>{
      console.log(res)
    })
    this.getProjectList()
  }

  closeProject(id:any){
    this._service.updateData(id, "Closed").subscribe((res)=>{
      console.log(res)
    })
    this.getProjectList()
  }

  cancelProject(id:any){
    this._service.updateData(id, "Cancelled").subscribe((res)=>{
      console.log(res)
    })
    this.getProjectList()
  }

}
