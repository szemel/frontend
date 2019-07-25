import {Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Output() showMenu = new EventEmitter();
  public items: Array<any>;
  public flag: boolean;

  constructor() {
    this.flag = false;
    this.items = [
      {link: '/add_article', name: 'dodaj artykuł'},
      {link: '/profile', name: 'mój profil'},
      {link: '/logout', name: 'wyloguj'}
    ];
  }

  toggleMenu() {
    this.flag = !this.flag;
    this.showMenu.emit(this.flag);
  }

}
