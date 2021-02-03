import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string){

    // set base url to request
    const url = `https://api.spotify.com/v1/${ query }`;
    // set Headers to request
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDL6DFNqsFZqN6Yl0217ou-1xL3COOuIVHXoZ38EIjUW9c-30zp9qXAn7rBu-bnXT61jT8SaDHWGWoBDBU'
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

  getArtistById(id:string){
    return this.getQuery(`artists/${id}`);
  }
  
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
            .pipe( map(data => {return data['tracks']}))
  }

}
