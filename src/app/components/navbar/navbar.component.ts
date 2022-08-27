import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  more: boolean = false;
  constructor() { }

  ngOnInit() {
  }
toggle() {
this.more = !this.more;
}
}