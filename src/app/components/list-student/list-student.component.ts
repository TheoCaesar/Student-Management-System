import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentsService } from 'src/app/services/students.service';
import DataTables from 'datatables.net';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{
  constructor (private studService:StudentsService) {}
  // datatableOptions:DataTables.Settings = {}

  ngOnInit() {
    // this.datatableOptions = {
    //   pagingType : 'full_numbers',
    //   pageLength : 5,
    //   processing: true,
    // };
    this.getStudentsdata()
  }

  studentsOBJs:any;
  getStudentsdata() {
    this.studService.getAllStudents().subscribe({
      next: (data) => {
        console.log(data);
        this.studentsOBJs=data;
        console.log('student query successful');
      },
      error(err) {console.log(err)},
      complete() {console.log('Done fetching data...')}
    })
  }

  deletefxn(studID:any) {
    this.studService.delStudent(studID).subscribe({
      next: (response)=> {
        console.log(response);
        this.ngOnInit()
      }
    })
  }
}
