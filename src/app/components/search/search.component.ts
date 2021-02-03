import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './style.scss' ]
})
export class SearchComponent {
  artists:any[] = [];
  loading:boolean;
  constructor( private spotify: SpotifyService) { }

  searchArtist( name : string){
    this.loading = true;
    this.spotify.getArtist( name )
        .subscribe( (data:any) => {
          this.artists = data;
          this.loading = false;
        })
  }
}
