import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  url= 'http://localhost:3000/students'

  constructor(private http:HttpClient){ }

  getAllStudents():Observable<object>  {
    return this.http.get(this.url);
  }

  postStudent(data:any) {
    // console.log(data)
    return this.http.post(this.url, data);
  }

  delStudent(studID:any){
    return this.http.delete(this.url + `/${studID}`)
  }

  getStudentById(id:number) {
    return this.http.get(this.url+ `/${id}`)
  }

  updateStudent(id:number, data:any) {
    return this.http.put(this.url+`/${id}`, data)
  }
}
