import { Injectable } from '@angular/core';
import { ISubjectType } from 'app/interface/student-subject';

@Injectable()
export class SubjectService {

  subjectType: ISubjectType[] = [];
  constructor() { }

  /* Get the Subjects */
  getSubjectType() {
    return this.subjectType = [
      {
        id: 1,
        type: 'English'
      },
      {
        id: 2,
        type: 'Maths'
      },
      {
        id: 3,
        type: 'Science'
      },
      {
        id: 4,
        type: 'History'
      },
      {
        id: 5,
        type: 'Geography'
      }
    ];
  }
}
