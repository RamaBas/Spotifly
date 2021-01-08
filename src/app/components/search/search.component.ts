import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './style.scss' ]
})
export class SearchComponent {
  artists:any[] = [];
  constructor( private spotify: SpotifyService) { }

  searchArtist( name : string){
    this.spotify.getArtist( name )
        .subscribe( (data:any) => {
          this.artists = data;
        })
  }
}
