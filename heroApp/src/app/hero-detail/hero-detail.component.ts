import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HeroService } from '../services/hero.service';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  form: FormGroup;
  updated:boolean=false;
  deleted:boolean=false;

  constructor(private route:ActivatedRoute, private router:Router, private service: HeroService) {
    const id = this.route.snapshot.params['id'];
    this.service.getHeroById(id).subscribe((data)=>{
      this.hero = data[0];
    });
   }

  ngOnInit() {    
    this.form = new FormGroup({
      "name":new FormControl(null,[Validators.required]),
      "difficulty":new FormControl(null,[Validators.required]),
      "dps":new FormControl(null, [Validators.required])      
    });
  }

  submit(form) : void {    
    let hero:Hero = 
    new Hero( 
      form.value.name,
      form.value.difficulty,
      form.value.dps,
      "https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/hero-select-portrait.png",
    );
    this.service.updateHero(this.hero._id,hero).subscribe(() => {
      this.updated = true;
      setTimeout(()=> {
        this.updated = false
      }, 5000);
    });
  }

  removeHero(id:string) {
    this.service.deleteHero(id).subscribe(() => {
      this.deleted = true;
      setTimeout(()=> {
        this.deleted = false;
        this.router.navigate(['/list']);
      }, 1000);
    });
  }
}
