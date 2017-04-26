import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  public disabled: boolean           = false;
  public status: {isopen: boolean}   = {isopen: false};
  public user:Object                 = {};
  public active;
  constructor(private router : Router, private _route: ActivatedRoute ) { 
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log("this._route.snapshot",this._route.snapshot["_urlSegment"].segments[0].path);
    this.active = this._route.snapshot["_urlSegment"].segments[0].path;
  }

  public toggled(open: boolean): void {
    // console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}

  layout(value) {
    this.active = value;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
