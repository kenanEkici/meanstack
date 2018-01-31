import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  
  constructor(private service:HeroService) {}

  heroList:Hero[];
  difficulty;
  name;

  ngOnInit() {
    this.fetchHeroes();
  }

  fetchHeroes() : void {
    this.service.getHeroList().subscribe(data => {
      this.heroList = data;
    })
  }

  filterDifficulty(diff){
    this.difficulty = diff;
  }

  filterName(name){
    this.name = name;
  }

}
