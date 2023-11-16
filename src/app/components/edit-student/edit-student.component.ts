import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private studService:StudentsService, private actv8drouter:ActivatedRoute, private router: Router){};

  getStudentID = this.actv8drouter.snapshot.params['id'];
  ngOnInit(): void {
    this.studService.getStudentById(this.getStudentID).subscribe({
      next: (queriedStudent:any)=> {
        this.editStudent = new FormGroup ({
          name: new FormControl (queriedStudent['name']),
          email: new FormControl (queriedStudent['email']),
        })
        console.log(queriedStudent)
      }
    });
  }

  alertMsg = false;

  editStudent = new FormGroup({
    name : new FormControl(""),
    email : new FormControl("")
  })

  UpdateData () {
    // console.log(this.editStudent.value)
    this.studService.updateStudent(this.getStudentID,this.editStudent.value).subscribe({
      next:(response)=> {
        console.log(response);
        this.alertMsg = true;
        // this.router.navigateByUrl('');
        setTimeout(() => {
          this.router.navigateByUrl('');
        }, 2500);
      },

    })
  }

  removeAlert () {this.alertMsg = false}
}
