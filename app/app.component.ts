import { Component }          from '@angular/core';

@Component({
  moduleId: module.id,    /* значение module.id для модуль-относительной загрузки templateUrl  */
  selector: 'my-app',   /* с помощью селектора будем запускать компонент в нужном месте */
  template: `
  <div style="background-color: #607D8B;">
    <h1><br></h1>

    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/students" routerLinkActive="active">All students</a>
      <a routerLink="/rdir31" routerLinkActive="active">RDIR31</a>
      <a routerLink="/rdir32" routerLinkActive="active">RDIR32</a>
    </nav>
    </div>
    <router-outlet></router-outlet>  <!-- Router Outlet – это одна из директив, обеспечиваемых модулем RouterModule.
                                        Роутер отображает каждый компонент непосредственно под <router-outlet>, когда мы перемещаемся по приложению.  -->

  `,   /* шаблон - что будет отображаться, можно вынести в отдельный файл */
  styleUrls: ['app.component.css']  /* указываем внешний файл для стилей */
})
export class AppComponent {
  title = 'Students List';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
