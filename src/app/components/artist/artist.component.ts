import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: [ './style.scss' ]
})
export class ArtistComponent{
  faAngleLeft = faAngleLeft;
  artist:any;
  topTracks:any;
  loading:boolean;
  constructor(private router: ActivatedRoute, private spotify:SpotifyService) { 
    this.loading=true;
    this.router.params.subscribe(params =>{
      spotify.getArtistById(params['id'])
        .subscribe( data => {
          this.artist = data;
          this.loading = false;
        });
      spotify.getTopTracks(params['id'])
        .subscribe(data => {
          this.topTracks = data;
          console.log(data);
          
        })
    });
  }


}
