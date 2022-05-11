import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  public showName: boolean = false;
  public showAddress: boolean = false;
  public showPhone: boolean = false;
  public showAge: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
