import {Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Output() showMenu = new EventEmitter();

  public flag: boolean;

  constructor() {
    this.flag = true;
  }

  toggleMenu() {
    this.flag = !this.flag;
    this.showMenu.emit(this.flag);
  }


}
