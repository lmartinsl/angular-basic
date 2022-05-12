import { Component, Input, OnInit, OnChanges, AfterContentInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})
export class ChildChildComponent implements OnInit, OnChanges, AfterContentInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
    console.log('ChildChildComponent - ngOnInit / ' + this.name)
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    console.log('ChildChildComponent - ngOnChanges / ' + this.name)
  }

  ngAfterContentInit(): void {
    console.log('ChildChildComponent - ngAfterContentInit / ' + this.name)
  }

}
