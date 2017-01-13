import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }                from './hero';
import { HeroService }         from './hero.service';
import { HeroesComponent }     from './heroes.component'
@Component({
  moduleId: module.id,
  selector: 'my-rdir31',
  templateUrl: 'rdir31.component.html',
  styleUrls: [ 'rdir31.component.css' ]
})
export class Rdir31Component implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

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


  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/