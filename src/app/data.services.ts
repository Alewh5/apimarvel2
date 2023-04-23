import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comics } from "./models/personajes.model";
import { LoginService } from "./login/login.service";
import { comics } from "./pages/comics/comics.component";
import { Characters } from "./models/comics.model";
import { CharacterComponent } from "./pages/character/character.component";


@Injectable()
export class DataServices {
    constructor(private httpClient:HttpClient, private LoginService:LoginService){}

    CargarDatos(characters:Characters){

        const token=this.LoginService.getIdToken();
        return this.httpClient.get('https://login-de-marvel-default-rtdb.firebaseio.com/datos.json' + token)
    }
    



}