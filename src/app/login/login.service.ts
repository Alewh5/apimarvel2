import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from "firebase/compat/app";

import 'firebase/compat/auth'
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment.prod";

firebase.initializeApp(environment.firebase);


@Injectable()
export class LoginService{


    constructor(private router:Router, private cookies:CookieService){}
    
    
    token: string;
    
    login(email:string, password:string){
        
        firebase.auth().signInWithEmailAndPassword(email, password).then(

            Response=>{
                firebase.auth().currentUser?.getIdToken().then(

                    token=>{
                        this.token=token!;
                        this.cookies.set("token",this.token);
                        this.router.navigate(['/']);
                    }
                )


            }



        )


    }

    getIdToken(){
        //return this.token;
        return this.cookies.get("token");
    }

    estaLogeado(){
        //return this.token;
        return this.cookies.get("token");
    }

    LogOut(){
        firebase.auth().signOut().then(()=>{
            this.token="";
            this.cookies.set("token",this.token);
            this.router.navigate(['/']);
            window.location.reload();
        });
    }


}

function login(email: any, string: any, password: any, string1: any) {
    throw new Error("Function not implemented.");
}
