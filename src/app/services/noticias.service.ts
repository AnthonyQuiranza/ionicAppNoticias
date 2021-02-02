import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }


  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadlines>('http://newsapi.org/v2/top-headlines?country=us&apiKey=c65d5ceb61e04ca99648b73157c970db');
  }
}
