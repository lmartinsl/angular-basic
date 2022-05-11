import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  public users: Array<any> = [
    { login: 'bob', role: 'admin', lastlogin: new Date('2/1/2018') },
    { login: 'haley', role: 'user', lastlogin: new Date('8/4/2020') }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
