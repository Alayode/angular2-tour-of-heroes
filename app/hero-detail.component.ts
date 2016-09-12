import { Component, Input } from '@angular/core';
import { Hero } from './hero';


/**
 * We create metadata with the @Component decorator where we specify the    selector name that identifies this component's element. 
 */
@Component({
    selector: 'my-hero-detail',
    template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`
})

/**
 * Then we export the class to make it available to other components.
 *  */

//INPUT PROPERTIES
/** 
 * to learn more about input properties and why we use them https://angular.io/docs/ts/latest/guide/attribute-directives.html#!#why-input
 * 
*/


export class HeroDetailComponent {
    @Input()
    hero: Hero;
}

/**
 * When we finish here, we'll import it into AppComponent and create
 * corresponding <my-hero-detail> element.
 * 
 */