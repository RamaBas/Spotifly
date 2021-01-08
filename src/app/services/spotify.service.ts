import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string){

    // set url basic to request
    const url = `https://api.spotify.com/v1/${ query }`;
    // set Headers to request
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBw_8WDQGzWT4omzllrISH-4dX3_kRuNhiH7tOVc_6SMEfS91lgmcUMs1saoYlD-dieO4wHBBcPKRh0t5Q'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?country=AR&limit=15')
          .pipe( map(data => {return data['albums'].items}));
  }

  getArtist(name:string){
    return this.getQuery(`search?q=${name}&type=artist&limit=15`)
          .pipe( map(data => {return data['artists'].items} ));
  }
}
