import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../http-interceptor/auth.service';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  children?: RouteInfo[];
  showChildren?: boolean;
}
// {path: 'dashboard', title: 'داشبورد', icon: 'dashboard', class: ''},
export const ROUTES: RouteInfo[] = [
  {path: 'dashboard', title: 'داشبورد', icon: 'dashboard', class: ''},
  {path: 'config', title: 'تنظیمات', icon: 'dashboard', class: ''},
  {path: 'entity-generator', title: 'موجودیت ها', icon: 'dashboard', class: ''},
  {path: '#', title: 'راهنما', icon: '', class: '', children: [

    ]},
  {path: '#', title: 'پشتیبانی', icon: '', class: '', children: [

    ]}

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }

  isMobileMenu() {
    if (window.screen.width > 991) {
      return false;
    }
    return true;
  }

  activateChild(item: RouteInfo) {
    item.showChildren = !item.showChildren;
    console.log('item.showChildren', item.showChildren);
  }

  logout() {
    this.authService.logout();
  }

  getRouterLinkActive(item: any) {

    if (item.children) {
      return '';
    } else {
      return 'active';
    }
  }
}
