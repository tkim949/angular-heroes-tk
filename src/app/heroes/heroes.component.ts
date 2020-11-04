import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { MessageService} from '../message.service';
import { HeroService } from '../hero.service';

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
  //heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  

  constructor(private heroService: HeroService, private messageService: MessageService) {}
  //below is a little different on the website, which doesn't have void
  ngOnInit(): void{
    this.getHeroes();
  }

  onSlect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  //this.heroes = this.heroService.getHeroes();

}
