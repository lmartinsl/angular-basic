import { MatSelectChange } from '@angular/material/select';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  public myClass: string = '';
  public currentColor: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public colorSelected(event: MatSelectChange): void {
    this.currentColor = event.value
  }

}
