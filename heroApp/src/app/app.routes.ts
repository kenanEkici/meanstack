import { Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { AuthActivatorService } from './services/auth-activator.service';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    { path: 'hero/:id', component: HeroDetailComponent},
    { path: 'add', component: AddHeroComponent, canActivate: [AuthActivatorService]},
    { path: 'list', component: HeroListComponent},
    { path: 'auth', component: LoginComponent},
    { path: '', redirectTo:'/list', pathMatch:'full'}
]