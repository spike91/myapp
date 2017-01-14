import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
              /*private heroesComponent: HeroesComponent,*/) { }


  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  /*add(name: string, group: string): void {
    this.heroesComponent.add(name, group);
  }*/

  add(name: string, group: string): void {
    name = name.trim();
    group = group.trim();
    if (!name) { return; }
    if (!group) { return; }
    this.heroService.create(name, group)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
