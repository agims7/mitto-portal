import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'mitto-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  public url: string;
  public menuList: any = [
    {
    'text': 'Lista przesyłek',
    'imgUrl': '../assets/img/packages.svg',
    'imgUrlHover': '../assets/img/packages-hover.svg',
    'imgUrlSelected': '../assets/img/packages-selected.svg',
    'hoverState': false,
    'activeState': true,
    'routerLink': '/portal/orders',
    'routerLinkActive': 'active'
    
  },
  {
    'text': 'Koszyk',
    'imgUrl': '../assets/img/cart.svg',
    'imgUrlHover': '../assets/img/cart-hover.svg',
    'imgUrlSelected': '../assets/img/cart-selected.svg',
    'hoverState': false,
    'activeState': false,
    'routerLink': '/portal/cart',
    'routerLinkActive': 'active'
  },
  {
    'text': 'Ustawienia',
    'imgUrl': '../assets/img/settings.svg',
    'imgUrlHover': '../assets/img/settings-hover.svg',
    'imgUrlSelected': '../assets/img/settings-selected.svg',
    'hoverState': false,
    'activeState': false,
    'routerLink': '/portal/settings',
    'routerLinkActive': 'active'
  },
  {
    'text': 'Wyloguj',
    'imgUrl': '../assets/img/logout.svg',
    'imgUrlHover': '../assets/img/logout-hover.svg',
    'imgUrlSelected': '../assets/img/logout-selected.svg',
    'hoverState': false,
    'activeState': false,
    'routerLink': '/login',
    'routerLinkActive': 'active'
  }
];

constructor(
  public appService: AppService
) { }

  ngOnInit() {
    this.checkCurrentUrl();
    console.log(this.menuList, this.url)
  }
  
  hoverOn(i) {
    this.menuList[i].hoverState = true;
  }

  hoverOut(i) {
    this.menuList[i].hoverState = false;
  }

  activateElement(el) {
    for (let i = 0; i < this.menuList.length; i++) {
      this.menuList[i].activeState = false;;
    }
    el.activeState = true;
  }

  checkCurrentUrl() {
    this.url = this.appService.urlAddress;
    for (let i = 0; i < this.menuList.length; i++) {
      if (this.url === this.menuList[i].routerLink) {
        this.menuList[i].activeState = true;
      }
    }
  }
}
