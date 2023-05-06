import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comics } from "./models/personajes.model";
import { LoginService } from "./login/login.service";
import { comics } from "./pages/comics/comics.component";
import { Characters } from "./models/comics.model";
import { CharacterComponent } from "./pages/character/character.component";
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";
import { RegisterComponent } from "./register/register.component";
import { getAnalytics } from "firebase/analytics";


@Injectable()
export class DataServices {
    constructor(private httpClient:HttpClient, private LoginService:LoginService, private auth:Auth){}

    CargarDatos(characters:Characters){

        const token=this.LoginService.getIdToken();
        return this.httpClient.get('https://login-de-marvel-default-rtdb.firebaseio.com/datos.json' + token)
    }

    Register({ email, password}: any) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }
    
}