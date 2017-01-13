<h2>My Heroes</h2>
<div>
  <label>Hero name:</label> <input #heroName />
<br>
  <label>Hero group:</label> <input #heroGroup />
  <button (click)="add(heroName.value, heroGroup.value); heroName.value=''; heroGroup.value=''">
    Add
  </button>
</div>
<ul class="heroes">
  <li *ngFor="let hero of heroes" (click)="onSelect(hero)"
      [class.selected]="hero === selectedHero">
    <span class="badge">{{hero.group}}</span>
    <span>{{hero.name}}</span>

    <button class="delete"
      (click)="delete(hero); $event.stopPropagation()">x</button>
      <button class="delete" (click)="gotoDetail()">View </button>
  </li>
</ul>