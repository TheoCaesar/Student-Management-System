import { FormGroup,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  constructor(private studService:StudentsService){}

  ngOnInit(): void {

  }
  addStudent = new FormGroup(
    {
      name: new FormControl(""),
      email: new FormControl("")
    }
  );

  alertMsg = false;

  SaveData() {
    // console.log(this.addStudent.value);
    this.studService.postStudent(this.addStudent.value).subscribe({
      next: (result)=>{
        console.log(result);
        this.alertMsg = true;
        this.addStudent.reset()
      },
      error(err) {console.log('err',err)},
      complete() {
        console.log('Added student obj');
      }
    });
  }

  removeAlert() {
    this.alertMsg = false;
  }
}


