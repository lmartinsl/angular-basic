import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  public myFontSize: string = '10px';
  public myColor: string = 'green'

  constructor() { }

  ngOnInit(): void {
  }

}
