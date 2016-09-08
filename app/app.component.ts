import { Component } from '@angular/core';


export class Hero {
  id: number;
  name: string;
}


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


@Component({
    selector: 'my-app',
 template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li>
    <!-- each hero goes here -->
  </li>
  </ul>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `
})

export class AppComponent { 
      title = 'Tour of Heroes';
      //Lets create a public property in AppComponent that exposes the heroes for binding 
      heroes = HEROES;

      //NOTE: We did not have to define the heroes type. TypeScript can infer it from the HEROES array.

      //DONT USE THIS NO MORE!!
      //  hero: Hero = {
      //     id: 1,
      //     name: 'Windstorm'
      //   };

}
