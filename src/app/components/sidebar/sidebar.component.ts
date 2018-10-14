import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/cliente', title: 'Clientes',  icon: 'person', class: '' },
    { path: '/pet', title: 'Pet',  icon: 'pets', class: '' },
    { path: '/table-list', title: 'Caixa',  icon: 'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon: 'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:    'bubble_chart', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
