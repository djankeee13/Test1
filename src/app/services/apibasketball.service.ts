import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApibasketballService {

  constructor(private http: HttpClient) { }

  getStats(){
    return this.http.get<any>('https://free-nba.p.rapidapi.com/stats' ,{
      headers: new HttpHeaders()
      .set( 'X-RapidAPI-Host', 'free-nba.p.rapidapi.com')
      .set('X-RapidAPI-Key', '64a8892e4fmshd7b99b6842df0c7p1ea89ejsn323053caf5e9'),
      params: new HttpParams()
      .set('page', 0)
      .set('per_page', 20)
    })
  }
}