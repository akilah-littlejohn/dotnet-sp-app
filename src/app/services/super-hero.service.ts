import { Injectable } from '@angular/core';
import { SuperHeroe } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private heroes: SuperHeroe[];

  constructor() {
    this.heroes = [];
    console.log(this.heroes)
  }
  getSuperHeroes() {
    // tutorial created a class I decided to use an interface instead
    const hero: SuperHeroe = {
      id: 1,
      name: 'Spider Man',
      firstName: 'Peter',
      lastName: 'Parker',
      place: 'New York'

    }

    this.heroes.push(hero)
    return this.heroes
  }


}
