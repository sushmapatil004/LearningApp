import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor() { }


  ngOnInit(): void {
  }


  property:any={
    "id": 1,
    "name":"shiva",
    "no":1234
}

}
