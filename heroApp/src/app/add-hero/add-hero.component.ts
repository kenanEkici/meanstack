import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HeroService } from '../services/hero.service';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})

export class AddHeroComponent implements OnInit {

  form: FormGroup;
  created:boolean=false;
  constructor(private service: HeroService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      "name":new FormControl(null,[Validators.required]),
      "difficulty":new FormControl(null,[Validators.required]),
      "dps":new FormControl(null, [Validators.required])      
    })
  }

  submit(form) : void {    
    let hero:Hero = 
    new Hero( 
      form.value.name,
      form.value.difficulty,
      form.value.dps,
      "https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/hero-select-portrait.png",
    );
    this.service.addHero(hero).subscribe(() => {
      this.created = true;
      setTimeout(()=> { 
        this.created = false;
        this.router.navigate(['/list']);        
      }, 1000);
    });
    form.reset();
  }
}
