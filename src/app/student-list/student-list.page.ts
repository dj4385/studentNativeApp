import { Component, OnInit } from '@angular/core';
import { StudentSerService } from '../common/student-ser.service';
import { AlertSerService } from '../common/alert-ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  students :any = []
  
  constructor(
    private studentAPI : StudentSerService,
    private _alertSer : AlertSerService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllStudentDetails()
  }

  getAllStudentDetails(){
    this.studentAPI.getAllStudents()
      .subscribe(
        res => {
          this.students = res;
        }, err => {
          this._alertSer.failure(err.messsage)
        }
      )
  }

  addStudentDetail(){
    this._router.navigate(['/student'])
  }

}
