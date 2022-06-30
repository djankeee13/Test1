import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get<any>(environment.basketballApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('page', '0')
      .set('per_page', '25')
      
    })
  }


  getTeams(){
    return this.http.get<any>('https://free-nba.p.rapidapi.com/teams' ,{
      headers: new HttpHeaders()
      .set( 'X-RapidAPI-Host', 'free-nba.p.rapidapi.com')
      .set('X-RapidAPI-Key', '64a8892e4fmshd7b99b6842df0c7p1ea89ejsn323053caf5e9'),
      params: new HttpParams()
      .set('page', 0)
    })
  }

}