import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/character/character.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { ComicComponent } from './pages/comic/comic.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginGuardian } from './login/login-guardian';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path:'characters', component:CharactersComponent, canActivate:[LoginGuardian]},
  { path:'character/:id', component:CharacterComponent},
  { path:'comics', component:ComicsComponent, canActivate:[LoginGuardian]},
  { path:'comic/:id', component:ComicComponent},
  { path:'login', component:LoginComponent},
  { path: 'Register', component:RegisterComponent},
  { path: 'home', component:HomeComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
 

];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule  
  ],

  exports: [RouterModule]
  
})
export class AppRoutingModule { }
