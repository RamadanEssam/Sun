import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
Observable


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient: HttpClient) { }
    getNews():Observable<any>{
      return this._HttpClient.get('https://newsapi.org/v2/everything?q=tesla&from=2023-04-30&sortBy=publishedAt&apiKey=7e4af2fe10b044e29e222bc243f0b8c2')
    }
}
