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
  toggleMenu(menu){
    if (menu.classList.toggle("toggleOn")) {
      menu.classList.add('toggleOn');
    } else {
      menu.classList.remove('toggleOn');
    }
  }
}

