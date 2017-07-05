import { Injectable } from '@angular/core';
import { IStudentList } from 'app/interface/student-list';
import { ISubjectType } from 'app/interface/student-subject';

@Injectable()
export class StudentService {

  constructor() { }

  studentList: IStudentList[] = [];

  /** Add student in the array List. */
  addStudent(studentDetail: IStudentList) {
    this.studentList.unshift(studentDetail);
  }

  /**Get the student list from the array. */
  getStudentList(): IStudentList[] {
    return this.studentList;
  }

}
