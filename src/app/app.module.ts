import { NgModule, NgProbeToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/character/character.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { ComicComponent } from './pages/comic/comic.component';
import { LoginComponent } from './login/login.component';
import { DataServices } from './data.services';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { RegisterComponent } from './register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { getAnalytics } from "firebase/analytics";
import { LoginGuardian } from './login/login-guardian';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/navbar/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    NavbarComponent,
    ComicsComponent,
    ComicComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

    
  
  ],
  providers: [DataServices, LoginService, CookieService, RegisterComponent, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }

