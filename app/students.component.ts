import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Student }                from './student';
import { StudentService }         from './student.service';  /* Импорт сервиса позволяет ссылаться на него в нашем коде.  */

@Component({
  moduleId: module.id,
  selector: 'my-students',
  templateUrl: 'students.component.html',
  styleUrls: [ 'students.component.css' ]
})
export class StudentsComponent implements OnInit {
  students: Student[];
  selectedStudent: Student;

  constructor(
    private studentService: StudentService,
    private router: Router) { }

  getStudents(): void {
    this.studentService
        .getStudents()
        .then(students => this.students = students);  /* обратный вызов присваивает свойству компонента students массив students, который вернул сервис.  */
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
    this.getStudents();                       /* Мы пишем метод ngOnInit с нашей логикой инициализации внутри и предоставляем Angular-у вызвать его в нужное время,
                                                          в критических моментах жизненного цикла компонента */
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
