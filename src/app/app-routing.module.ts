import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';

const routes: Routes = [
  {path:'', component:ListStudentComponent},
  {path:'add', component:AddStudentComponent },
  {path:'edit/:id', component: EditStudentComponent},
  {path:'login', component: LoginStudentComponent},
  {path:'register', component: RegisterStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
