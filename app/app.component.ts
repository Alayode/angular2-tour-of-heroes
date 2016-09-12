import { Component } from '@angular/core';
import { Hero } from './hero';


//Our app needs more heros lets create an array of heroes using the const from ECMAScript2015
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

/** 
 * const
 * 
 * The const declaration creates a read-only reference to a value. 
 * It does not mean the value it holds is immutable, 
 * just that the variable identifier cannot be reassigned.
 *
*/


const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

/**
 *  The key is the name of the CSS class (selected).
 *  The value is true if the two heroes match and false otherwise. 
 *  We’re saying “apply the selected class if the heroes match, remove it if they don’t”. 
 **/



@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent { 
      title = 'Tour of Heroes';
      //Lets create a public property in AppComponent that exposes the heroes for binding 
      heroes = HEROES;
      selectedHero: Hero;
      //NOTE: We did not have to define the heroes type. TypeScript can infer it from the HEROES array.

      //DONT USE THIS NO MORE!!
      //  hero: Hero = {
      //     id: 1,
      //     name: 'Windstorm'
      //   };

      // Now add an onSelect method that sets the selectedHero property to the hero the user clicked.
      onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
}
