import { Component } from '@angular/core';
import { StudentSerService } from '../common/student-ser.service';
import { AlertSerService } from '../common/alert-ser.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  students :any = []

  constructor(
    private studentAPI : StudentSerService,
    private _alertSer : AlertSerService
  ) {
    this.getAllStudentDetails()
  }
  
  getAllStudentDetails(){
    this.studentAPI.getAllStudents()
      .subscribe(
        res => {
          this.students = res;
        }, err => {
          console.log(err)
        }
      )
  }

}
