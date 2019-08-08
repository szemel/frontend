import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter();

  public items: Array<any>;

  constructor() {
    this.items = [
      {link: '/add_article', name: 'dodaj artykuł'},
      {link: '/profile', name: 'mój profil'},
      {link: '/logout', name: 'wyloguj'}
    ];
  }

  ngOnInit() {
  }

  sendCloseMenu() {
    this.closeMenu.emit();
  }
}
