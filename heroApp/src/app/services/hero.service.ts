import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroService {

    BASEAPIURL: string = "http://localhost:3000/api/heroes";

    constructor(private http: Http) {
    }

    getHeroList(): Observable<Hero[]> {
        return this.http.get(this.BASEAPIURL)
            .map(res=>res.json())
            .map(this.parseHeroData)            
            .catch(this.onError)
    }

    getHeroById(id:string): Observable<Hero[]> {
        return this.http.get(this.BASEAPIURL+"/"+id)
            .map(res=>res.json())             
            .map(this.parseHeroData)         
            .catch(this.onError)
    }

    addHero(hero:Hero) : Observable<any> {
        return this.http.post(this.BASEAPIURL, hero).catch(this.onError);
    }

    updateHero(id:string, hero:Hero) : Observable<any> {
        return this.http.put(this.BASEAPIURL+"/"+id,hero).catch(this.onError);
    }

    deleteHero(id:string) {
        return this.http.delete(this.BASEAPIURL+"/"+id);
    }

    parseHeroData(rawHeroes: any[]): Hero[] {
        return Object.keys(rawHeroes).map(key => {
            let hero = rawHeroes[key];
            return new Hero( 
                hero.name,
                hero.difficulty,
                hero.dps,
                hero.avatar,
                hero._id
            );
        })
    }    

    onError(res: Response): Observable<any> {
        let error = `Error ${res.status}: ${res.statusText}`;
        console.error(error);
        return Observable.throw(error);
    }
}
