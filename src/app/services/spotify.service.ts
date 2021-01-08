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
      'Authorization' : 'Bearer BQDaN9HMTzqDgTQuK59PR_x2YQDiGXEztrsdAwi_rOID9kM4MJ53f5s7Lhg_BSTeOwDG1Mqtyq-ZU0rFfEw'
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
