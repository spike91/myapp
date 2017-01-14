import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Student }           from './student';

@Injectable()
export class StudentSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Student[]> {
    return this.http
               .get(`app/students/?name=${term}`)
               .map((r: Response) => r.json().data as Student[]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/