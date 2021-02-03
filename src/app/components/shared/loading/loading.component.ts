import { Component } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: [ './style.scss' ]
})
export class LoadingComponent{
  title = 'spotifly';
  faSpinner = faSpinner;

}
