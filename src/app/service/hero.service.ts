import { Injectable } from '@angular/core';
// import {HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from '../Model/hero';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(    private http: HttpClient,
    // private messageService: MessageService 
  ) {  }
  
    /** GET heroes from the server */
    getHeroes (): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          // tap(heroes => this.log(`fetched heroes`)),
          // catchError(this.handleError('getHeroes', []))
        );
    }
  


}
