import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit, OnChanges {

  @Input() public title: string = '';
  @Output() public incBy = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {

  }

  public plusOneClick(): void {
    this.incBy.emit(1)
  }
  public plusTwoClick(): void {
    this.incBy.emit(2)
  }
  public minusOneClick(): void {
    this.incBy.emit(-1)
  }
  public minusTwoClick(): void {
    this.incBy.emit(-2)
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.hasOwnProperty('title')) {
      console.log('O título mudou!')
      console.log(changes.title)
    }
  }

}
