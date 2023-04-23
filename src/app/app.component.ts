import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'apiMarvel';

  constructor() {

  }
  ngOnInit(): void {
     
  firebase.initializeApp({
    apiKey: "AIzaSyBfkxXzmElvfkCw_SKqJMtk_AY_Idwvtqs",
    
    authDomain: "login-de-marvel.firebaseapp.com",
  });

  }
}
