import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Rdir32Component } from './rdir32.component';
import { Student }        from './student';
import { StudentService } from './student.service';


@Component({
  moduleId: module.id,
  selector: 'my-student-detail',
  templateUrl: 'student-detail.component.html',
  styleUrls: [ 'student-detail.component.css' ]
})
export class StudentDetailComponent implements OnInit {
  student: Student;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.studentService.getStudent(+params['id']))
      .subscribe(student => this.student = student);
  }

  save(): void {
    this.studentService.update(this.student)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  delete(student: Student): void {
    this.studentService.delete(student.id)
    .then(() => this.goBack());
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
