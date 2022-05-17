import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  constructor() { }

  id:string = " "

  ngOnInit(): void {

    if(localStorage.getItem("id") != null){}

      this.id = localStorage.getItem("id")!;


  }



}
