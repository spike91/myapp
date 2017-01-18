import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { StudentsComponent }      from './students.component';
import { StudentDetailComponent }  from './student-detail.component';
import { Rdir31Component }  from './rdir31.component';
import { Rdir32Component }  from './rdir32.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },          /* path: роутер соответствует этому пути URL в адресной строке браузера (dashboard). */
  { path: 'detail/:id', component: StudentDetailComponent },      /* component: компонент, который маршрутизатор должен создать, когда перейдёт по этому маршруту (DashboardComponent). */
  { path: 'students',     component: StudentsComponent },
  { path: 'rdir31',     component: Rdir31Component },
  { path: 'rdir32',     component: Rdir32Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
