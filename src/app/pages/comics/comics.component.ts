import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServices } from 'src/app/data.services';
import { DateElement } from 'src/app/models/comics.model';
import { MarvelService } from 'src/app/servives/marvel.service';

@Injectable()
export class comics{
  constructor(private dataService:DataServices){}
}

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  title='Comics';
  dataService: any;

  constructor(private marvelSvc:MarvelService, private router:Router) { }
  comics?:Observable<any>;


  ngOnInit() {

    this.getAllComics();

  }

  getAllComics(){

    this.comics= this.marvelSvc.getComics();

  }

  getComics(id:string){

    this.router.navigate(['/comic/',id]);

  }

}
