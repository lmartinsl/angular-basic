import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChange, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit {

  @Input() public name: string;
  @Input() public age: number;
  @Input() public food: string;

  public events: Array<any> = [];
  public nextEventId: number = 0;
  public colors: Array<string> = ['accent', 'warn', 'primary'];

  constructor() {
    console.log(this.name + '- constructor')
    this.newEvent('constructor')
  }

  ngOnInit(): void {
    console.log(this.name + '- ngOnInit')
    this.newEvent('ngOnInit')
  }

  public newEvent(nameEvent: string): void {
    let id = this.nextEventId++;
    const maxColor = (id % this.colors.length)

    this.events.push({
      id: id,
      color: this.colors[maxColor],
      name: nameEvent
    })

    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id === id)
      if (idx >= 0) {
        this.events.splice(idx, 1)
      }
    }, 2000 + this.events.length * 1000)
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    console.log(changes)
    if (changes.hasOwnProperty('name')) {
      console.log(this.name + '- ngOnChanges')
    }
    this.newEvent('ngOnChanges')
  }

  ngAfterContentInit(): void {
    console.log(this.name + '- ngAfterContentInit')
    this.newEvent('ngAfterContentInit')
  }

  ngAfterViewInit(): void {
    console.log(this.name + '- ngAfterViewInit')
    this.newEvent('ngAfterViewInit')
  }

  ngOnDestroy(): void {
    console.log(this.name + '- ngOnDestroy')
    this.newEvent('ngOnDestroy')
  }
}
