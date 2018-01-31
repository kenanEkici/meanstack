//core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//model-driven forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//HTTP
import { HttpModule } from '@angular/http';

//services
import { HeroService } from './services/hero.service';
import { AuthService } from './services/auth.service';
import { AuthActivatorService } from './services/auth-activator.service';

//components
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';

//routers
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

//pipes
import { DifficultyPipe } from './pipes/difficulty.pipe';
import { NamePipe } from './pipes/name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SearchComponent,
    HeroListComponent,
    AddHeroComponent,
    HeroDetailComponent,
    LoginComponent,
    DifficultyPipe,
    NamePipe,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService, AuthService, AuthActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
