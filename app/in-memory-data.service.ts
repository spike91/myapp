import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let students = [
      {id: 153656, group: 'RDIR32', name: 'Minah Kim'},
      {id: 155452, group: 'RDIR32', name: 'Jieun Han'},
      {id: 153471, group: 'RDIR32', name: 'Aranzazu Torres'},
      {id: 154251, group: 'RDIR32', name: 'Jon Kaasa'},
      {id: 152343, group: 'RDIR32', name: 'Karina Flores'},
      {id: 154423, group: 'RDIR32', name: 'Kathy Corey'},
      {id: 155412, group: 'RDIR31', name: 'Kent Miller'},
      {id: 154211, group: 'RDIR31', name: 'Robert King'},
      {id: 154631, group: 'RDIR31', name: 'Kami Gunnoe'},
      {id: 154123, group: 'RDIR31', name: 'Steve Heim'}
    ];
    return {students};
  } /* создаем массив студентов и возвращаем переменную на него */
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
