import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor(private _http: HttpClient) { }

  user = new BehaviorSubject<any>(null)

  getData() {
    return this._http.get(`http://localhost:3000/projects`)
  }

  getDataById(id: any) {
    return this._http.get(`http://localhost:3000/users/${id}`)
  }

  postData(data: any) {
    return this._http.post('http://localhost:3000/projects', data)
  }

  updateData(data: any, value: any) {
    return this._http.put(`http://localhost:3000/projects/${data.id}`, {
      "projectName": data.projectName,
      "reason": data.reason,
      "type": data.type,
      "division": data.division,
      "category": data.category,
      "priority": data.priority,
      "department": data.department,
      "sdate": data.sdate,
      "edate": data.edate,
      "location": data.location,
      "status": value,
      "id": data.id
    })
  }
}
