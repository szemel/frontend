import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Output() showMenu = new EventEmitter<boolean>();
  constructor() { }

  toggleMenu() {
    this.showMenu.emit(true);
  }
}
