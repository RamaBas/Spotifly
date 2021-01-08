import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './style.scss' ]
})
export class HomeComponent {
  albums : any[]= []
  
  constructor( private spotify:SpotifyService) {
    this.spotify.getNewReleases()
        .subscribe( (data:any) => {
          this.albums = data
        })
  } 
}
