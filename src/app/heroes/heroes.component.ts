import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }*/
  heroes = HEROES;
  selectedHero: Hero;
  

  constructor() { }
  //below is a little different on the website, which doesn't have void
  ngOnInit(): void {
  }

  onSlect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
