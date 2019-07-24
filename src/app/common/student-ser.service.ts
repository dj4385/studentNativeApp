import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentSerService {

  studentApiUrl = environment.baseURL

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllStudents(){
    return this.httpClient.get(this.studentApiUrl + "studentDetails" )
  }
  createStudentDetail(student){
    return this.httpClient.post(this.studentApiUrl + "student",student)
  }
  deleteStudentDetail(studentID){
    return this.httpClient.delete(this.studentApiUrl + "deleteStudent/"+studentID)
  }
  editStudentDetail(studentID,studentData){
    return this.httpClient.put(this.studentApiUrl + "updateStudentDetail/"+studentID, studentData)
  }

}
