import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { StudentsComponent }      from './students.component';
import { StudentDetailComponent }  from './student-detail.component';
import { StudentService }          from './student.service';
import { StudentSearchComponent }  from './student-search.component';
import { Rdir31Component }      from './rdir31.component';
import { Rdir32Component }      from './rdir32.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),  /* делаем видимым наш сервис с данными */
    AppRoutingModule          /* делаем видимым наш роутинг */
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDetailComponent,
    StudentsComponent,
    StudentSearchComponent,
    Rdir31Component,
    Rdir32Component
  ],            /* чтобы Angular распознал теги: <my-student> */
  providers: [ StudentService ],    /* Массив providers указывает Angular, что нужно создать новый экземпляр HeroService,
                                    когда он создает новый AppComponent. AppComponent может использовать этот сервис, чтобы получить героев, */
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
