import { Component, OnInit, Input, Output } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HeroService } from '../services/hero.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  @Input() index: number;
  
  constructor(private service: HeroService) { }

  ngOnInit() {
  }
}
