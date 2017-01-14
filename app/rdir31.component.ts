import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Student }                from './student';
import { StudentService }         from './student.service';
import { StudentsComponent }     from './students.component'
@Component({
  moduleId: module.id,
  selector: 'my-rdir31',
  templateUrl: 'rdir31.component.html',
  styleUrls: [ 'rdir31.component.css' ]
})
export class Rdir31Component implements OnInit {
  students: Student[];
  selectedStudent: Student;

  constructor(
    private studentService: StudentService,
    private router: Router) { }

  getStudents(): void {
    this.studentService
        .getStudents()
        .then(students => this.students = students);
  }

  add(name: string, group: string): void {
    name = name.trim();
    group = group.trim();
    if (!name) { return; }
    if (!group) { return; }
    this.studentService.create(name, group)
      .then(student => {
        this.students.push(student);
        this.selectedStudent = null;
      });
  }


  delete(student: Student): void {
    this.studentService
        .delete(student.id)
        .then(() => {
          this.students = this.students.filter(h => h !== student);
          if (this.selectedStudent === student) { this.selectedStudent = null; }
        });
  }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStudent.id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
