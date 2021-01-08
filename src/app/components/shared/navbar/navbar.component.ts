import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './style.scss'
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(menu,button){
    if (menu.classList.toggle("toggleOn")) {
      button.innerHTML = "x";
      menu.classList.add('toggleOn');

    } else {
      button.innerHTML = "=";
      menu.classList.remove('toggleOn');
    }
  }
}

