import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SlimScroll} from 'angular2-slimscroll';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
/*  template: '<div class="my-div" slimscroll background="#333" opacity="0.6" position="right" width="7px"></div>'
 ,
  directives: [SlimScroll]
})
 
class App {
   
}*/
})
export class FullLayoutComponent implements OnInit {

  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};
  public user:Object = {};
  constructor(private router : Router ) { 
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}

  logout() {
    console.log("logout")
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
