import { Component, OnInit } from '@angular/core';

import { Student }        from './student';
import { StudentService } from './student.service';
import { StudentsComponent } from './students.component';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }


  ngOnInit(): void {
    this.studentService.getStudents()
      .then(students => this.students = students.slice(1, 5));
  }


}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
