import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { StudentSearchService } from './student-search.service';
import { Student } from './student';

@Component({
  moduleId: module.id,
  selector: 'student-search',
  templateUrl: 'student-search.component.html',
  styleUrls: [ 'student-search.component.css' ],
  providers: [StudentSearchService]
})
export class StudentSearchComponent implements OnInit {
  students: Observable<Student[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private studentSearchService: StudentSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.students = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.studentSearchService.search(term)
        // or the observable of empty students if no search term
        : Observable.of<Student[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Student[]>([]);
      });
  }

  gotoDetail(student: Student): void {
    let link = ['/detail', student.id];
    this.router.navigate(link);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/