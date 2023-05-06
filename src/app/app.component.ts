import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'apiMarvel'; 

  constructor(private router:Router, private cookies:CookieService){}
  ngOnInit(): void {
  }
    
    
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
