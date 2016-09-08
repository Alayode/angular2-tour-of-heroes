import { Component, Input } from '@angular/core';



/**
 * We create metadata with the @Component decorator where we specify the    selector name that identifies this component's element. 
 */
@Component({
    selector: 'my-hero-detail',
})

/**
 * Then we export the class to make it available to other components.
 *  */
export class HeroDetailComponent {

}

/**
 * When we finish here, we'll import it into AppComponent and create
 * corresponding <my-hero-detail> element.
 * 
 */